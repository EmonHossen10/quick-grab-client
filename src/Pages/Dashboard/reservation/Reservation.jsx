import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import useAuth from "../../../Hooks/useAuth";

const Reservation = () => {
  const { user } = useAuth();
  const axiosPublic = UseAxiosPublic();
  const queryClient = useQueryClient();

  // Form state
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  // Mutation for reservation
  const reservationMutation = useMutation({
    mutationFn: async (reservationData) => {
      const token = localStorage.getItem("access-token");
      const res = await axiosPublic.post("/reservations", reservationData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Reservation confirmed!");
      queryClient.invalidateQueries({
        queryKey: ["reservations", user?.email],
      });
      // reset form
      setPhone("");
      setDate("");
      setTime("");
      setGuests(1);
    },
    onError: () => {
      toast.error("Failed to make reservation.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    reservationMutation.mutate({
      name,
      email,
      phone,
      date,
      time,
      guests,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          readOnly
          className="w-full border px-3 py-2 rounded-lg bg-gray-100 cursor-not-allowed"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="number"
          min={1}
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />

        <button
          type="submit"
          disabled={reservationMutation.isLoading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition flex justify-center items-center gap-2"
        >
          {reservationMutation.isLoading ? "Booking..." : "Reserve"}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Reservation;

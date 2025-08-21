import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
} from "chart.js";
import { ChevronLeft, ChevronRight, ChevronDown  } from "lucide-react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const generateFakeData = () =>
  Array.from({ length: 7 }, () => Math.floor(Math.random() * 8) + 1);

const years = [2024, 2025, 2026];
const months = Array.from({ length: 12 }, (_, i) => ({
  month: i,
  label: new Date(0, i).toLocaleString("default", { month: "long" }),
}));

const getWeeksInMonth = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return Math.ceil(daysInMonth / 7);
};

export default function WatchTime() {
  const [selected, setSelected] = useState({ year: 2025, month: 6 }); // July 2025
  const [week, setWeek] = useState(1);
  const [data, setData] = useState(generateFakeData());

  const totalWeeks = getWeeksInMonth(selected.year, selected.month);

  useEffect(() => {
    setData(generateFakeData());
  }, [selected, week]);

  const handleSelectChange = (e) => {
    const [month, year] = e.target.value.split("-").map(Number);
    setSelected({ month, year });
    setWeek(1);
  };

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Watch Time (hrs)",
        data,
        backgroundColor: "#3B82F6",
        borderRadius: 8,
        barPercentage: 0.5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: "#1E3A8A",
        titleColor: "#FFFFFF",
        bodyColor: "#E0E7FF",
        cornerRadius: 8,
        padding: 12,
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#374151",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        ticks: {
          color: "#374151",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-xs text-black bg-white space-y-5">
      <div className="flex justify-between items-center pb-3 border-b border-gray-200 ">
        <span className="text-md font-bold">Weekly Watch Time</span>
        <div className="relative w-2/5">
          <select
            className="w-full text-sm p-1.5 border border-gray-300 outline-none rounded-md appearance-none"
            value={`${selected.month}-${selected.year}`}
            onChange={handleSelectChange}
          >
            {years.flatMap((year) =>
              months.map((m) => (
                <option key={`${m.month}-${year}`} value={`${m.month}-${year}`}>
                  {m.label} {year}
                </option>
              ))
            )}
          </select>

          {/* Lucide React icon as arrow */}
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setWeek((w) => Math.max(1, w - 1))}
          disabled={week === 1}
          className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-accent-900)] items-center justify-center disabled:bg-[var(--clr-primary-900)]/40"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <span className="text-md font-bold text-gray-700">
          {week}/5 weeks
        </span>

        <button
          onClick={() => setWeek((w) => Math.min(totalWeeks, w + 1))}
          disabled={week === totalWeeks}
          className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-accent-900)] items-center justify-center disabled:bg-[var(--clr-primary-900)]/40"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

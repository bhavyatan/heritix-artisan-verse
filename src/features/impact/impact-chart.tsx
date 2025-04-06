
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";

// Sample data
const areaData = [
  { month: "Jan", artisanIncome: 1200, trees: 5 },
  { month: "Feb", artisanIncome: 1550, trees: 7 },
  { month: "Mar", artisanIncome: 1800, trees: 9 },
  { month: "Apr", artisanIncome: 1700, trees: 8 },
  { month: "May", artisanIncome: 2100, trees: 12 },
  { month: "Jun", artisanIncome: 2400, trees: 15 },
];

const pieData = [
  { name: "Handloom", value: 35 },
  { name: "Pottery", value: 25 },
  { name: "Wood Carving", value: 20 },
  { name: "Jewelry", value: 15 },
  { name: "Other", value: 5 },
];

const COLORS = ["#dc7e41", "#aa4e28", "#94775c", "#68503f", "#4a3b31"];

export const ImpactAreaChart = () => {
  return (
    <div className="w-full h-80 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={areaData}>
          <defs>
            <linearGradient id="artisanIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc7e41" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#dc7e41" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="trees" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#68503f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#68503f" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke="#dc7e41" />
          <YAxis yAxisId="right" orientation="right" stroke="#68503f" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="artisanIncome"
            stroke="#dc7e41"
            fillOpacity={1}
            fill="url(#artisanIncome)"
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="trees"
            stroke="#68503f"
            fillOpacity={1}
            fill="url(#trees)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const CraftDistributionPieChart = () => {
  return (
    <div className="w-full h-72 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress,
} from "@mui/material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const API = process.env.REACT_APP_API_URL;

function AnalyticsPage() {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState("30");
  const [loading, setLoading] = useState(true);

  // Load all links
  async function load() {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/links`);
      setLinks(res.data || []);
    } catch (err) {
      console.error("❌ Analytics API Error:", err);
      setLinks([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // Prepare chart data
  const chartData = links.map((l) => ({
    code: l.short_id,
    clicks: l.clicks || 0,
  }));

  return (
    <Box maxWidth="lg" sx={{ mx: "auto" }}>
      {/* Header */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Analytics Overview 📊
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Understand your top links, click performance and URL activity.
        </Typography>
      </Paper>

      {/* Date Filter */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Date Range</InputLabel>
          <Select
            value={filter}
            label="Date Range"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="1">Last 24 hours</MenuItem>
            <MenuItem value="7">Last 7 days</MenuItem>
            <MenuItem value="30">Last 30 days</MenuItem>
            <MenuItem value="all">All time</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      {/* ======================== BAR CHART ======================== */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={2}>
          Clicks per Link (Bar Chart)
        </Typography>

        {loading ? (
          <Box sx={{ textAlign: "center", py: 5 }}>
            <CircularProgress />
          </Box>
        ) : chartData.length === 0 ? (
          <Typography color="text.secondary">No data available yet.</Typography>
        ) : (
          <Box sx={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="code" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clicks" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>

      {/* ======================== LINE CHART ======================== */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Click Trends (Line Chart)
        </Typography>

        {loading ? (
          <Box sx={{ textAlign: "center", py: 5 }}>
            <CircularProgress />
          </Box>
        ) : chartData.length === 0 ? (
          <Typography color="text.secondary">No data available yet.</Typography>
        ) : (
          <Box sx={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="code" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clicks" stroke="#0ea5e9" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default AnalyticsPage;

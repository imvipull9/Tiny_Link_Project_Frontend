import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function StatsBar({ links }) {
  const totalLinks = links.length;
  const totalClicks = links.reduce((sum, l) => sum + (l.clicks || 0), 0);
  const mostClicked = links.reduce(
    (max, l) => ((l.clicks || 0) > (max?.clicks || 0) ? l : max),
    null
  );

  const latest = [...links].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )[0];

  const cards = [
    {
      label: "Total Links",
      value: totalLinks,
    },
    {
      label: "Total Clicks",
      value: totalClicks,
    },
    {
      label: "Top Link",
      value: mostClicked?.code || "—",
      helper: mostClicked?.clicks
        ? `${mostClicked.clicks} clicks`
        : "No clicks yet",
    },
    {
      label: "Latest Created",
      value: latest?.code || "—",
      helper: latest?.createdAt
        ? new Date(latest.createdAt).toLocaleString()
        : "",
    },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card, idx) => (
        <Grid item xs={12} sm={6} md={3} key={card.label}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: 6,
              },
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              gutterBottom
            >
              {card.label}
            </Typography>
            <Typography variant="h5" fontWeight={700}>
              {card.value}
            </Typography>
            {card.helper && (
              <Typography variant="caption" color="text.secondary">
                {card.helper}
              </Typography>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsBar;

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function StatsBar({ links }) {
  // Safe defaults
  const safeLinks = Array.isArray(links) ? links : [];

  const totalLinks = safeLinks.length;
  const totalClicks = safeLinks.reduce((sum, l) => sum + (l.clicks || 0), 0);

  // Most clicked link
  const mostClicked = safeLinks.reduce(
    (max, l) => ((l.clicks || 0) > (max?.clicks || 0) ? l : max),
    null
  );

  // Latest created link (using created_at)
  const latest = [...safeLinks].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
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
      value: mostClicked?.short_id || "—",
      helper: mostClicked?.clicks
        ? `${mostClicked.clicks} clicks`
        : "No clicks yet",
    },
    {
      label: "Latest Created",
      value: latest?.short_id || "—",
      helper: latest?.created_at
        ? new Date(latest.created_at).toLocaleString()
        : "",
    },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.label}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              borderRadius: 2,
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
              sx={{ fontWeight: 600 }}
            >
              {card.label}
            </Typography>

            <Typography variant="h5" fontWeight={700}>
              {card.value}
            </Typography>

            {card.helper && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
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

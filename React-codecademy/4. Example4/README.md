# Separating container components from presentational components

# Basic Idea:
  If a component has to have `state`, make calculations based on `props`, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX

  Types of Components:
    1. Those that have `state`, make calculations based on `props`, or manage any other complex logic, and
    2. Those that render HTML-like JSX

  In this programming pattern, the container component does the work of figuring out what to display. The presentational component does the work of actually displaying it. If a component does a significant amount of work in both areas, then that's a sign that you should use this pattern!

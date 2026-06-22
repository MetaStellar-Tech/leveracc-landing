"use client";

import React from "react";

interface ClientErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ClientErrorBoundaryState {
  hasError: boolean;
}

class ClientErrorBoundary extends React.Component<
  ClientErrorBoundaryProps,
  ClientErrorBoundaryState
> {
  constructor(props: ClientErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ClientErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("[ClientErrorBoundary] Client component failed", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }

    return this.props.children;
  }
}

export default ClientErrorBoundary;

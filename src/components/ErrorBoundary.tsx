import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (process.env.NODE_ENV === 'development') {
            console.error('Error caught by boundary:', error, errorInfo);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-background">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                            Something went wrong
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We're sorry, but something unexpected happened.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

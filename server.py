#!/usr/bin/env python3
"""
Lightweight Static Server for M. Tabassat's Portfolio Website.
Usage: python3 server.py [PORT]
"""

import http.server
import socketserver
import sys
import webbrowser

DEFAULT_PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable caching headers and CORS for local testing
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run(port=DEFAULT_PORT):
    for p in range(port, port + 20):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                print("\n" + "=" * 60)
                print(f"🚀 M. Tabassat Portfolio Server is running!")
                print(f"🌐 Local URL: http://localhost:{p}")
                print(f"📁 Root:      /home/tabassat/Code/portfolio")
                print("⌨️  Press Ctrl+C to stop the server.")
                print("=" * 60 + "\n")
                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\n🛑 Shutting down server gracefully. Goodbye!")
                    sys.exit(0)
        except OSError as e:
            if "Address already in use" in str(e):
                continue
            else:
                raise e

if __name__ == "__main__":
    requested_port = int(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_PORT
    run(requested_port)


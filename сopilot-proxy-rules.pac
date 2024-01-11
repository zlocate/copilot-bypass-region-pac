function FindProxyForURL(url, host) {
    const PROXY = "SOCKS5 127.0.0.1:1080";
    const DIRECT_RULE = "DIRECT";
    
    const domains = [
        "github.com/login/*",
        "api.github.com/user",
        "api.github.com/copilot_internal/*",
        "copilot-telemetry.githubusercontent.com/telemetry",
        "default.exp-tas.com",
        "copilot-proxy.githubusercontent.com",
        "origin-tracker.githubusercontent.com",
        "*.githubcopilot.com"
    ];
    for (var i = 0; i < domains.length; i++) {
        if (shExpMatch(url, domains[i])) return PROXY;
    }
    
    return DIRECT_RULE;
}

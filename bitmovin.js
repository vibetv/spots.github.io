// Function to decode base64 encoded parameter from URL
    function getParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(name)) {
            const encodedValue = urlParams.get(name);
            try {
                return atob(encodedValue); // Base64 decode
            } catch (error) {
                console.error('Error decoding parameter:', error);
                return null;
            }
        }
        return null;
    }

    // Function to override URLs for licensing purposes
    function override(url) {
        if (url.indexOf("licensing.bitmovin.com/licensing") > -1) 
            return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
        if (url.indexOf("licensing.bitmovin.com/impression") > -1) 
            return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ==";
        return url;
    }

    // Override XMLHttpRequest open method to handle URL overrides
    const opens = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        let url = override(arguments[1]);
        arguments[1] = url;
        return opens.apply(this, arguments);
    };

    // Get video URL parameter from query string and decode it
    const hlsUrl = getParameter('file');

    const container = document.getElementById('my-player');
    const source = {
        hls: hlsUrl,
    };

    const playerConfig = {
        key: '11d3698c-efdf-42f1-8769-54663995de2b', // Replace with a valid API key if necessary
        playback: {
            autoplay: true,
            muted: false,
        },
    };

    // Create Bitmovin Player instance
    const player = new bitmovin.player.Player(container, playerConfig);

    // Function to load HLS source
    function loadHlsSource() {
        player.load(source).then(
            () => {
                console.log('Successfully loaded HLS source');
            },
            (error) => {
                console.error('Error loading HLS source:', error);
            }
        );
    }

    // Handle error event to switch to fallback video
    player.on(bitmovin.player.PlayerEvent.Error, (error) => {
        console.error('Player error:', error);

        // Load fallback video if HLS fails
        const fallbackVideoUrl = 'https://wartakita.github.io/player.github.io/gangguan.mp4'; // Replace with actual fallback video URL
        const fallbackSource = {
            progressive: fallbackVideoUrl,
        };

        player.load(fallbackSource).then(
            () => {
                console.log('Successfully loaded fallback video');
            },
            (fallbackError) => {
                console.error('Error loading fallback video', fallbackError);
            }
        );
    });

    // Handle loaded event to switch back to HLS source
    player.on(bitmovin.player.PlayerEvent.Loaded, () => {
        console.log('Player loaded event');
        // Check if currently playing fallback video
        if (player.getSource().progressive) {
            // Attempt to reload HLS source
            loadHlsSource();
        }
    });

    // Load initial source into the player
    loadHlsSource();

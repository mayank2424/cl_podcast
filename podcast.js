
        class PodcastContainer {
            defaultEpisodesLimit = 10;
            currentEpisodePage = 1;
            defaultEpisodeImage;
            activeEpisode;
            serverBaseUrl = 'http://localhost:3000';
            htmlElement = 'app';
            activePlayerElementIdentifier;
            controlsHtml = `<div class="plyr__controls">
            <button class="plyr__controls__item plyr__control" type="button" data-plyr="rewind">
                <svg class="cl_ep_back" xmlns="http://www.w3.org/2000/svg" width="27" height="31" viewBox="0 0 27 31" fill="none">
                    <path d="M8.21484 22.2285C7.22266 22.2285 6.50195 21.957 6.05273 21.4141C5.60742 20.8672 5.38477 20.2031 5.38477 19.4219H6.48633C6.5332 19.9648 6.63477 20.3594 6.79102 20.6055C7.06445 21.0469 7.55859 21.2676 8.27344 21.2676C8.82812 21.2676 9.27344 21.1191 9.60938 20.8223C9.94531 20.5254 10.1133 20.1426 10.1133 19.6738C10.1133 19.0957 9.93555 18.6914 9.58008 18.4609C9.22852 18.2305 8.73828 18.1152 8.10938 18.1152C8.03906 18.1152 7.9668 18.1172 7.89258 18.1211C7.82227 18.1211 7.75 18.123 7.67578 18.127V17.1953C7.78516 17.207 7.87695 17.2148 7.95117 17.2188C8.02539 17.2227 8.10547 17.2246 8.19141 17.2246C8.58594 17.2246 8.91016 17.1621 9.16406 17.0371C9.60938 16.8184 9.83203 16.4277 9.83203 15.8652C9.83203 15.4473 9.68359 15.125 9.38672 14.8984C9.08984 14.6719 8.74414 14.5586 8.34961 14.5586C7.64648 14.5586 7.16016 14.793 6.89062 15.2617C6.74219 15.5195 6.6582 15.8867 6.63867 16.3633H5.5957C5.5957 15.7383 5.7207 15.207 5.9707 14.7695C6.40039 13.9883 7.15625 13.5977 8.23828 13.5977C9.09375 13.5977 9.75586 13.7891 10.2246 14.1719C10.6934 14.5508 10.9277 15.1016 10.9277 15.8242C10.9277 16.3398 10.7891 16.7578 10.5117 17.0781C10.3398 17.2773 10.1172 17.4336 9.84375 17.5469C10.2852 17.668 10.6289 17.9023 10.875 18.25C11.125 18.5938 11.25 19.0156 11.25 19.5156C11.25 20.3164 10.9863 20.9688 10.459 21.4727C9.93164 21.9766 9.18359 22.2285 8.21484 22.2285ZM15.0234 13.6094C16.1094 13.6094 16.8945 14.0566 17.3789 14.9512C17.7539 15.6426 17.9414 16.5898 17.9414 17.793C17.9414 18.9336 17.7715 19.877 17.4316 20.623C16.9395 21.6934 16.1348 22.2285 15.0176 22.2285C14.0098 22.2285 13.2598 21.791 12.7676 20.916C12.3574 20.1855 12.1523 19.2051 12.1523 17.9746C12.1523 17.0215 12.2754 16.2031 12.5215 15.5195C12.9824 14.2461 13.8164 13.6094 15.0234 13.6094ZM15.0117 21.2676C15.5586 21.2676 15.9941 21.0254 16.3184 20.541C16.6426 20.0566 16.8047 19.1543 16.8047 17.834C16.8047 16.8809 16.6875 16.0977 16.4531 15.4844C16.2188 14.8672 15.7637 14.5586 15.0879 14.5586C14.4668 14.5586 14.0117 14.8516 13.7227 15.4375C13.4375 16.0195 13.2949 16.8789 13.2949 18.0156C13.2949 18.8711 13.3867 19.5586 13.5703 20.0781C13.8516 20.8711 14.332 21.2676 15.0117 21.2676Z" fill="#222222"/>
                    <path d="M-0.000484467 17.2014C-0.000484467 16.5463 0.530691 16.0151 1.18579 16.0151C1.8409 16.0151 2.37207 16.5463 2.37207 17.2014C2.37207 23.0978 7.15217 27.8779 13.0486 27.8779C18.945 27.8779 23.7251 23.0978 23.7251 17.2014C23.7251 11.305 18.945 6.5249 13.0486 6.5249H10.0829C9.42778 6.5249 8.89661 5.99373 8.89661 5.33862C8.89661 4.68352 9.42778 4.15234 10.0829 4.15234H13.0486C20.2557 4.15234 26.0977 9.99453 26.0977 17.2014C26.0977 24.4083 20.2555 30.2505 13.0486 30.2505C5.8417 30.2505 -0.000484467 24.4083 -0.000484467 17.2014Z" fill="#222222"/>
                    <path d="M12.1713 8.71809C12.5979 9.21564 12.5401 9.9645 12.0429 10.3908C11.5453 10.8174 10.7965 10.7597 10.3701 10.2624L6.8113 6.11041C6.43026 5.66609 6.43026 5.01043 6.8113 4.56615L10.3701 0.414173C10.7965 -0.0831089 11.5453 -0.140837 12.0429 0.285749C12.5401 0.712071 12.5979 1.46091 12.1713 1.95847L9.27446 5.33828L12.1713 8.71809Z" fill="#222222"/>
                    </svg>
            <span class="plyr__sr-only">Rewind 10s</span>
            </button>
            <button class="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play">
            <svg class="icon--pressed cl_pause_icon" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="21" fill="#FC544C"/>
                    <path d="M18.9004 14H15.4004V28H18.9004V14Z" fill="white"/>
                    <path d="M26.9504 14H23.4504V28H26.9504V14Z" fill="white"/>
                </svg>
            <svg class="icon--not-pressed cl_play_icon" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM27.7547 21.3234L17.5172 28.7719C17.4611 28.8122 17.3949 28.8363 17.326 28.8415C17.2571 28.8466 17.1881 28.8327 17.1265 28.8012C17.065 28.7697 17.0134 28.7219 16.9773 28.663C16.9411 28.604 16.922 28.5363 16.9219 28.4672V13.5797C16.9216 13.5104 16.9406 13.4425 16.9766 13.3833C17.0127 13.3242 17.0644 13.2762 17.126 13.2446C17.1877 13.2131 17.2568 13.1992 17.3259 13.2046C17.3949 13.2099 17.4611 13.2343 17.5172 13.275L27.7547 20.7188C27.8031 20.753 27.8425 20.7983 27.8697 20.8509C27.897 20.9035 27.9112 20.9619 27.9112 21.0211C27.9112 21.0803 27.897 21.1387 27.8697 21.1913C27.8425 21.2439 27.8031 21.2892 27.7547 21.3234Z" fill="#FC544C"/>
            </svg>
            <span class="label--pressed plyr__sr-only">Pause</span><span class="label--not-pressed plyr__sr-only">Play</span>
            </button>
            <button class="plyr__controls__item plyr__control" type="button" data-plyr="fast-forward">
                <svg class="cl_ep_forward" width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1172 22.2285C9.125 22.2285 8.4043 21.957 7.95508 21.4141C7.50977 20.8672 7.28711 20.2031 7.28711 19.4219H8.38867C8.43555 19.9648 8.53711 20.3594 8.69336 20.6055C8.9668 21.0469 9.46094 21.2676 10.1758 21.2676C10.7305 21.2676 11.1758 21.1191 11.5117 20.8223C11.8477 20.5254 12.0156 20.1426 12.0156 19.6738C12.0156 19.0957 11.8379 18.6914 11.4824 18.4609C11.1309 18.2305 10.6406 18.1152 10.0117 18.1152C9.94141 18.1152 9.86914 18.1172 9.79492 18.1211C9.72461 18.1211 9.65234 18.123 9.57812 18.127V17.1953C9.6875 17.207 9.7793 17.2148 9.85352 17.2188C9.92773 17.2227 10.0078 17.2246 10.0938 17.2246C10.4883 17.2246 10.8125 17.1621 11.0664 17.0371C11.5117 16.8184 11.7344 16.4277 11.7344 15.8652C11.7344 15.4473 11.5859 15.125 11.2891 14.8984C10.9922 14.6719 10.6465 14.5586 10.252 14.5586C9.54883 14.5586 9.0625 14.793 8.79297 15.2617C8.64453 15.5195 8.56055 15.8867 8.54102 16.3633H7.49805C7.49805 15.7383 7.62305 15.207 7.87305 14.7695C8.30273 13.9883 9.05859 13.5977 10.1406 13.5977C10.9961 13.5977 11.6582 13.7891 12.127 14.1719C12.5957 14.5508 12.8301 15.1016 12.8301 15.8242C12.8301 16.3398 12.6914 16.7578 12.4141 17.0781C12.2422 17.2773 12.0195 17.4336 11.7461 17.5469C12.1875 17.668 12.5312 17.9023 12.7773 18.25C13.0273 18.5938 13.1523 19.0156 13.1523 19.5156C13.1523 20.3164 12.8887 20.9688 12.3613 21.4727C11.834 21.9766 11.0859 22.2285 10.1172 22.2285ZM16.9258 13.6094C18.0117 13.6094 18.7969 14.0566 19.2812 14.9512C19.6562 15.6426 19.8438 16.5898 19.8438 17.793C19.8438 18.9336 19.6738 19.877 19.334 20.623C18.8418 21.6934 18.0371 22.2285 16.9199 22.2285C15.9121 22.2285 15.1621 21.791 14.6699 20.916C14.2598 20.1855 14.0547 19.2051 14.0547 17.9746C14.0547 17.0215 14.1777 16.2031 14.4238 15.5195C14.8848 14.2461 15.7188 13.6094 16.9258 13.6094ZM16.9141 21.2676C17.4609 21.2676 17.8965 21.0254 18.2207 20.541C18.5449 20.0566 18.707 19.1543 18.707 17.834C18.707 16.8809 18.5898 16.0977 18.3555 15.4844C18.1211 14.8672 17.666 14.5586 16.9902 14.5586C16.3691 14.5586 15.9141 14.8516 15.625 15.4375C15.3398 16.0195 15.1973 16.8789 15.1973 18.0156C15.1973 18.8711 15.2891 19.5586 15.4727 20.0781C15.7539 20.8711 16.2344 21.2676 16.9141 21.2676Z" fill="#222222"/>
                    <path d="M26.0981 17.2014C26.0981 16.5463 25.567 16.0151 24.9119 16.0151C24.2568 16.0151 24 16.5463 24 17.2014C24 23.0978 18.8964 28.5 13 28.5C7.10358 28.5 1.74119 23.0978 1.74119 17.2014C1.74119 11.305 7.10358 6 13 6H16C16.6551 6 17.201 5.99373 17.201 5.33862C17.201 4.68352 16.6699 4.15234 16.0148 4.15234H13.0491C5.84192 4.15234 0 9.99453 0 17.2014C0 24.4083 5.84219 30.2505 13.0491 30.2505C20.256 30.2505 26.0981 24.4083 26.0981 17.2014Z" fill="#222222"/>
                    <path d="M13.9264 8.71809C13.4998 9.21564 13.5575 9.9645 14.0548 10.3908C14.5523 10.8174 15.3012 10.7597 15.7275 10.2624L19.2864 6.11041C19.6674 5.66609 19.6674 5.01043 19.2864 4.56615L15.7275 0.414173C15.3012 -0.0831089 14.5524 -0.140837 14.0548 0.285749C13.5575 0.712071 13.4998 1.46091 13.9264 1.95847L16.8232 5.33828L13.9264 8.71809Z" fill="#222222"/>
                </svg>
            <span class="plyr__sr-only">Forward 10s</span>
            </button>
            <div class="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">00:00</div>

            <div class="plyr__controls__item plyr__progress__container">
            <div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="1405.829333" aria-valuenow="0.244486" id="plyr-seek-9078" aria-valuetext="00:00 of 23:25" seek-value="74.36128644424407" style="--value:0.02%;"><progress class="plyr__progress__buffer" min="0" max="100" value="10.679461331171414" role="progressbar" aria-hidden="true">% buffered</progress><span class="plyr__tooltip" style="left: 56.9282%;">13:20</span></div>
            </div>
            <div class="plyr__controls__item plyr__time--duration plyr__time" aria-label="Duration">23:25</div>
            <div class="plyr__controls__item plyr__volume">
            <button type="button" class="plyr__control" data-plyr="mute">
                <svg class="icon--pressed unmute_icon" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.7592 0.875V13.125C8.7592 13.6082 8.36703 14 7.88328 14H7.36648C7.13669 13.999 6.91649 13.9079 6.75334 13.7463L3.39857 10.395C2.90624 9.90258 2.23831 9.62561 1.54162 9.625C0.690206 9.625 0 8.93552 0 8.085V5.915C0 5.06448 0.690206 4.375 1.54162 4.375C2.23831 4.37439 2.90624 4.09742 3.39857 3.605L6.75334 0.25375C6.91649 0.0920988 7.13669 0.000966544 7.36648 0H7.88328C8.36703 0 8.7592 0.391751 8.7592 0.875Z" fill="#222222"/>
                    <path d="M19 4L13 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 4L19 10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg class="icon--not-pressed mute_icon" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7592 0.875V13.125C8.7592 13.6082 8.36703 14 7.88328 14H7.36648C7.13669 13.999 6.91649 13.9079 6.75334 13.7463L3.39857 10.395C2.90624 9.90258 2.23831 9.62561 1.54162 9.625C0.690206 9.625 0 8.93552 0 8.085V5.915C0 5.06448 0.690206 4.375 1.54162 4.375C2.23831 4.37439 2.90624 4.09742 3.39857 3.605L6.75334 0.25375C6.91649 0.0920988 7.13669 0.000966544 7.36648 0H7.88328C8.36703 0 8.7592 0.391751 8.7592 0.875ZM14.0149 2.38913C13.9306 2.30393 13.8189 2.25124 13.6996 2.24038C13.578 2.23727 13.4606 2.28482 13.3755 2.37163L12.7536 2.99288C12.5978 3.16068 12.5978 3.42007 12.7536 3.58788C14.4358 5.55255 14.4358 8.4482 12.7536 10.4129C12.5978 10.5807 12.5978 10.8401 12.7536 11.0079L13.3755 11.6291C13.4606 11.7159 13.578 11.7635 13.6996 11.7604C13.8194 11.7511 13.9316 11.6981 14.0149 11.6116C16.3286 8.97189 16.3286 5.02886 14.0149 2.38913ZM10.9062 4.85619C10.9973 4.76756 11.1208 4.72012 11.2478 4.72495C11.3742 4.73987 11.4902 4.80247 11.5719 4.89994C12.5062 6.14439 12.5062 7.8555 11.5719 9.09994C11.4917 9.19799 11.3743 9.25823 11.2478 9.26619C11.1219 9.2744 10.9982 9.23004 10.9062 9.14369L10.2843 8.51369C10.135 8.36802 10.1093 8.13731 10.223 7.96244C10.608 7.37841 10.608 6.62148 10.223 6.03745C10.1093 5.86258 10.135 5.63188 10.2843 5.4862L10.9062 4.85619Z" fill="#222222"/>
                </svg>
                <span class="label--pressed plyr__sr-only">Unmute</span><span class="label--not-pressed plyr__sr-only">Mute</span>
            </button>
            <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" id="plyr-volume-9078" aria-valuetext="100.0%" style="--value:100%;">
            </div>
            <div>
                <button title="Click to copy link" type="button" class="plyr__share_action" onclick="podcast.createAndCopyEpisodeLink()">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.44336 10.1328L11.5659 13.1178" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.5584 4.88281L6.44336 7.86781" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
            </div>
        </div>`;


            constructor(htmlElement = 'app', kind='off_the_record', activePlayerElement = 'active_player') {
                this.htmlElement = htmlElement;
                this.activePlayerElementIdentifier =  activePlayerElement;

                if(kind === 'off_the_record') {
                    this.defaultEpisodeImage = 'https://images.transistor.fm/file/transistor/images/show/16210/1629369508-artwork.jpg';
                } else {
                    this.defaultEpisodeImage = 'https://images.transistor.fm/file/transistor/images/show/23500/1629368681-artwork.jpg';
                }

                this.getEpisodeFromUrlAndActivate();
            }

            /**
             * Setup episodes element
             */
            setup() {
                //Create element skeleton
                this.createRootElementSkeleton();
                
                this.fetchEpisodes()
                .then(({ data, meta }) => this.addEpisodesToHtml(data));
            }

            /**
             * Activate episode if episode id present in url
             * @returns 
             */
            getEpisodeFromUrlAndActivate() {
                const episode = new URLSearchParams(window.location.search).get('ep');
                if(!episode) return;

                //Fetch episode details and activate player
                this.fetchEpisodeById(episode)
                .then(({ data }) => {
                    this.activatePlayer({
                        ...data.attributes,
                        episodeId: data.id,
                    });
                    this.initializePlayer();
                })
                .catch(er => {
                    console.log(er)
                })
            }

            /**
             * Create elements skeleton and append to body
             */
            createRootElementSkeleton() {
                //Create episodes container
                const episodeDiv = document.createElement('div');
                episodeDiv.id = 'episodes';

                //Create active player div
                const activePlayerDiv = document.createElement('div');
                activePlayerDiv.id = 'active_player';
                activePlayerDiv.classList.add('hidden');

                //Create load more element with button
                const loadMoreDiv = document.createElement('div');
                const loadMoreButton = document.createElement('button');
                loadMoreDiv.classList.add('cl_load_more_episodes', 'hidden');
                loadMoreButton.classList.add('ep_load_more_button');
                loadMoreButton.innerHTML = 'Load more'
                loadMoreButton.addEventListener('click', () => {
                    this.loadMoreEpisodes()
                });
                loadMoreDiv.appendChild(loadMoreButton);

                //Create cl episode main container
                const cl_episode_container = document.createElement('div');
                cl_episode_container.appendChild(episodeDiv);
                cl_episode_container.appendChild(loadMoreDiv);
                cl_episode_container.appendChild(activePlayerDiv)
            
                //Append container to root element
                const app = document.querySelector(this.htmlElement);
                app.append(cl_episode_container)
            }

            /**
             * Append episodes to html
             * @returns 
             */
            addEpisodesToHtml(data) {
                const episodeElement = document.getElementById('episodes');
                const episodedHtmlElement = data.map((episode) => this.constructEpisodeRow(episode));
                episodedHtmlElement.map(div => episodeElement.innerHTML += div);
                //TODO: remove this from here
                document.getElementsByClassName('cl_load_more_episodes')[0].classList.remove('hidden')
            }

            /**
             * Fetch episodes from server
             */
            async fetchEpisodes () {
                try { 
                    const url = `${this.serverBaseUrl}/api/v1/episodes?pagination[page]=${this.currentEpisodePage}&pagination[per]=${this.defaultEpisodesLimit}`
                    const episodes = await (await fetch(url)).json();
                    if(episodes.errors) {
                        throw Error(episodes.errors);
                    }
                    return episodes;
                } catch(err) {
                    console.log(`Something bad happened while fetching episodes from server: ${err}`);
                    throw err;
                }
            }
            /**
             * Fetch episode by id
             */
            async fetchEpisodeById(episodeId) {
                try {
                    const url = `${this.serverBaseUrl}/api/v1/episodes/${episodeId}`;
                    const episode = await (await fetch(url)).json();
                    if(episode.errors) {
                        throw Error(episode.errors);
                    }
                    return episode;
                } catch(error) {
                    console.log(`Something bad happened while fetching episode ${episodeId} from server: ${error}`);
                    throw error;
                }
            }
            /**
             * Load more episodes
             */
            async loadMoreEpisodes() {
                try {
                    this.currentEpisodePage += 1;
                    const episodes = await this.fetchEpisodes();
                    this.addEpisodesToHtml(episodes.data);

                    //TODO: Implement logic to handle show/hide of load more button
                } catch(error) {
                    console.log(`Something bad happened while loading more episodes: ${error}`);
                    throw error;
                }
            }
            /**
             * Create episode row element
             */
            constructEpisodeRow(episode) {
                const { id, attributes: {  title, published_at, duration, summary, media_url, duration_in_mmss, formatted_published_at, image_url } } = episode;
                return `<div class="episode_row" data-episode='${JSON.stringify({
                    title: title.replace(/\'/gmi,''),
                    published_at,
                    media_url,
                    duration_in_mmss,
                    image_url,
                    episodeId: id, 
                })}' onclick="podcast.selectEpisode(event)">
                    <div class="artwork">
                        <img :src="selectedEpisode.artwork" title="Play/Pause" src=${image_url || this.defaultEpisodeImage}>
                        <span>${duration_in_mmss}</span>
                    </div>
                    <div class="info">
                        <div class="headers_info">
                        <div class="ep_published_time header_info_elem">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 1V5" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 1V5" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1 9H19" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>${formatted_published_at}</span>
                        </div>
                        <div class="ep_duration header_info_elem">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 5V11L15 13" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                            <span>${this.convertDurationToReadableFormat(duration)}</span>
                        </div>
                        </div>
                        <div class="title">
                            <p class="title_header">${title}</p>
                        </div>
                        <div class="description">${summary}</div>
                        <div class="controls">
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM27.7547 21.3234L17.5172 28.7719C17.4611 28.8122 17.3949 28.8363 17.326 28.8415C17.2571 28.8466 17.1881 28.8327 17.1265 28.8012C17.065 28.7697 17.0134 28.7219 16.9773 28.663C16.9411 28.604 16.922 28.5363 16.9219 28.4672V13.5797C16.9216 13.5104 16.9406 13.4425 16.9766 13.3833C17.0127 13.3242 17.0644 13.2762 17.126 13.2446C17.1877 13.2131 17.2568 13.1992 17.3259 13.2046C17.3949 13.2099 17.4611 13.2343 17.5172 13.275L27.7547 20.7188C27.8031 20.753 27.8425 20.7983 27.8697 20.8509C27.897 20.9035 27.9112 20.9619 27.9112 21.0211C27.9112 21.0803 27.897 21.1387 27.8697 21.1913C27.8425 21.2439 27.8031 21.2892 27.7547 21.3234Z" fill="#FC544C"/>
                            </svg>
                        </div>

                    </div>
                </div>`
            }
            /**
             * Select episode and set active episode
             */
            selectEpisode(event) {
                const episodeRow = event.currentTarget;
                const episode = JSON.parse(episodeRow.attributes['data-episode'].value);

                //Call function to reset the active player;
                this.activatePlayer(episode);
                this.initializePlayer();
            }
            /**
             * Convert duration to readable format
             */
            convertDurationToReadableFormat(duration) {
                return `${Math.round(duration/60)} minutes`;
            }
            activatePlayer (episode) {
                this.activeEpisode = episode;

                //Update the player with selected episode
                const activePlayer = document.getElementById(this.activePlayerElementIdentifier);
                activePlayer.classList.remove('hidden')
                activePlayer.innerHTML = `
                <div class="ep_player_container">
                    <div class="ep_player_controls_artwork">
                        <img style="width:100%; height:100%;" :src="selectedEpisode.artwork" title="Play/Pause" src=${episode.image_url || this.defaultEpisodeImage}>
                        <span>${episode.duration_in_mmss}</span>
                        </div>
                    <div class="ep_player_controls_info">
                        <h3>${episode.title}</h3>
                        <audio playsinline controls style="--plyr-audio-control-background-hover: none;--plyr-font-family:'Helvetica';--plyr-font-weight-regular;--plyr-audio-control-color: #555555;--plyr-range-thumb-height:0px;--plyr-range-thumb-active-shadow-width:0px; --plyr-range-thumb-background:none;--plyr-color-main: #222222; --plyr-audio-progress-buffered-background:#F5F5F7">
                            <source src=${episode.media_url} type="audio/mp3" />
                        </audio>
                    </div>
                </div>`;
            
            }
            /**
             * Create and copy episode share link
             */
            createAndCopyEpisodeLink(){
                const origin = window.location.origin;
                const shareLink = `${origin}?ep=${this.activeEpisode.episodeId}`;
                navigator.clipboard.writeText(shareLink);
            }
            /**
             * Initialize the plyr sdk
             */
            initializePlayer() {
                //Initialize player
                new Plyr('audio', {
                    controls: this.controlsHtml
            }).play();
            }
        }

        const podcast = new PodcastContainer('.record.wf-section', 'product_innovation');
        window.podcast = podcast;
        podcast.setup();

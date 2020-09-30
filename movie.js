var main = document.querySelectorAll('.main .center')[0]
fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
    .then(Response => Response.json())
    .then(data => {
        data.results.map((i, j) => {
            if (j > 15)
                return;
            if (j == 0) {
                main.innerHTML += `
             <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original`+ i.backdrop_path + `'"></div>
             `;
            } else {
                if (j == 1) {
                    main.innerHTML += `
                    <h2>Filmes em Alta.</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+ i.poster_path + `" /</div>
                    `;

                } else {
                    main.innerHTML += `
                    
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+ i.poster_path + `" /</div>
                    `;


                }
            }
        })
    })


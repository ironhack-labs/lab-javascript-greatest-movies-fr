// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map((movie) => movie.director);
    return newArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spilDramMovs = moviesArray.filter((movie) => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));
    let nbrMovies = spilDramMovs.length;
    return nbrMovies;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const scoreSum = moviesArray.reduce(function (accumulator, movie) {
        console.log(movie.score);
        if ((movie.score === "") || (movie.score === undefined)) {
            return accumulator;//skip this unrated movie
        }
        return accumulator + movie.score;
    }, 0);
    let average = (scoreSum / moviesArray.length);

    return Number(average.toFixed(2));

    /*jasmine=== it('should return average even if one of the movies does not have score', () => {
        expect(scoresAverage([{ score: 6 }, { score: '' }, {}])).toBe(2);
      });
    });*/
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    //get an array containing only drama movies
    const dramMovs = moviesArray.filter((movie) => (movie.genre.includes('Drama')));

    const average = scoresAverage(dramMovs);
    return Number(average.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //copies moviesarray to avoid mutating
    const sortedArray = moviesArray.concat();
    sortedArray.sort(((a, b) => a.year - b.year));

    return sortedArray;

    //i don't know how to order movies with the same year by their title, alphabetically 

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedArray = moviesArray.concat();
    console.log(sortedArray);
    sortedArray.sort(((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    }));
    firstTwenty = sortedArray.slice(0, 20);
    console.log(firstTwenty);


    return firstTwenty.map((movie) => movie.title);;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

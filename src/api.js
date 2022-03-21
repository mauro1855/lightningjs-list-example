
const movies = ['Sully', 'The Equalizer', 'Terminator', 'Star Wars', 'Lord of the Rings', 'Harry Potter',
'Indiana Jones', 'Transformers', 'Pulp Fiction', '2012']


export function fetchData() {
    return movies.map(m => ({title: m}))
}

export function fetchNextPage() {
    return movies.map(m => ({title: m}))
}
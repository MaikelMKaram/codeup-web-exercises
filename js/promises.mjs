
let repo;
let commitURL;
let dateTime;


fetch('https://api.github.com/users',  {headers: {'Authorization': ghKey}})
    .then(response => response.json())
    .then(user => {
        console.log(user);
        repo = user[0].repos_url;
        fetch(repo, {headers: {'Authorization': ghKey}})
        .then(response => response.json())
            .then(res => {
                console.log(res);
                commitURL = res[0].commits_url.split("{")[0];
                fetch(commitURL, {headers: {'Authorization': ghKey}})
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        dateTime = res[0].commit.author.date.split("T")[0];
                        console.log(dateTime);
                        return dateTime;
                    })
            })
    });


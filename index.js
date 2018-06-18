const token = '4777d626b2cf87eb4952191e480a28f3716ebe13'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));

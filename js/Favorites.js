export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'fernandoalvesrufino',
        name: 'Fernando Rufino',
        public_repos: '58',
        followers: '25'
      },
      {
        login: 'maykbrito',
        name: 'Mayk Brito',
        public_repos: '76',
        followers: '120000'
      },
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}` 
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.user a').href = `https://github.com/${user.login}`
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers
      
      this.tbody.append(row)
      
    } )
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img>
        <a target="_blank">
          <p></p>
          <span></span>
        </a>
      </td>
      <td class="repositories">58</td>
      <td class="followers">24</td>
      <td><button class="remove">&times;</button></td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}
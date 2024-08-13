import React from 'react'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="Navbar">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="Home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="About">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Countries">Countries</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="DropDown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>
    </div>
  )
}

export default Header

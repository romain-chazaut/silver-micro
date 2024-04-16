export default function navBar() {
    return (
      <>
        <div id="navbar">
            <nav>
                <ul>
                    <li><a href={`/home`}>home</a></li>
                    <li><a href={`/search`}>search</a></li>
                    <li><a href={`/book`}>book</a></li>
                    <li><a href={`/profile`}>profile</a></li>
                </ul>
            </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
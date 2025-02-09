const Jumbotron = () => {
  const handleLearnMore = () => {
    const el = document.querySelector(".sound-section") as HTMLElement;
    window.scrollTo({
      top: el.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src="/iphone-14.jpg" alt="iPhone 14 Pro" />
      <p className="text">Big and bigger.</p>
      <span className="description">From $41.62/mo. for 24 mo. or $999 before trade-in</span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src="/iphone-hand.png" alt="iphone-hand" />
    </div>
  );
};

export default Jumbotron;

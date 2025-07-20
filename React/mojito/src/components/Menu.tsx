import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { allCocktails } from "@/lib/constants";

type ButtonClicked = "left" | "right";

const Menu = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<{
    value: number;
    buttonClicked: ButtonClicked;
  }>({ value: 0, buttonClicked: "left" });

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: currentIndex.buttonClicked === "right" ? -100 : 100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details h2",
      {
        xPercent: currentIndex.buttonClicked === "right" ? -100 : 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      {
        xPercent: currentIndex.buttonClicked === "right" ? -100 : 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 100,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#menu",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#m-right-leaf", { y: 400, x: -10 }, 0)
      .to("#m-left-leaf", { y: -200, x: 10 }, 0);
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index: number, buttonClicked: ButtonClicked) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex({ value: newIndex, buttonClicked });
  };

  const getCocktailAt = (indexOffset: number) => {
    return allCocktails[
      (currentIndex.value + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex.value;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive ? "text-white border-white" : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                const side = currentIndex.value > index ? "left" : "right";
                goToSlide(index, side);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content lg:w-[90%]">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex.value - 1, "left")}
          >
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>

          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex.value + 1, "right")}
          >
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

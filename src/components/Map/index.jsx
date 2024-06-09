import "./style.css";
import map from "../../../assets/map.jpg";

const holesMap = [
  {
    id: 1,
    coords: "496,373,510,382,602,231,579,219",
  },
  {
    id: 2,
    coords: "519,198,527,208,438,315,424,353,399,341,424,292,467,251,495,225",
  },
  {
    id: 3,
    coords: "334,340,337,329,202,292,180,297,174,308,179,317,188,321,206,317",
  },
  {
    id: 4,
    coords: "46,204,57,209,106,118,118,63,110,41,95,31,87,45,92,77,71,148",
  },
  {
    id: 5,
    coords: "111,10,104,16,206,132,218,140,229,135,230,121",
  },
  {
    id: 6,
    coords:
      "252,139,255,145,351,116,392,116,421,130,437,116,421,98,372,92,315,108",
  },
  {
    id: 7,
    coords: "473,97,473,89,328,54,277,44,260,52,271,72",
  },
  {
    id: 8,
    coords: "435,45,435,51,559,64,577,59,575,42,564,34",
  },
  {
    id: 9,
    coords: "593,75,587,82,739,207,750,205,758,194,751,182",
  },
];

const teepadsPositions = [
  {
    id: 1,
    left: 488,
    top: 356,
  },
  {
    id: 2,
    left: 500,
    top: 191,
  },
  {
    id: 3,
    left: 312,
    top: 315,
  },
  {
    id: 4,
    left: 37,
    top: 183,
  },
  {
    id: 5,
    left: 93,
    top: -3,
  },
  {
    id: 6,
    left: 241,
    top: 122,
  },
  {
    id: 7,
    left: 450,
    top: 73,
  },
  {
    id: 8,
    left: 421,
    top: 31,
  },
  {
    id: 9,
    left: 577,
    top: 65,
  },
];

export const Map = ({ currentHole, startQuestion, gameState }) => {
  const goOnHole = () => {
    console.log("Kliknuto");
  };

  const getPlayersPosition = (currentPosition, teepadsArray) => {
    const translateTop =
      teepadsArray[currentPosition].top - teepadsArray[0].top;
    const translateLeft =
      teepadsArray[currentPosition].left - teepadsArray[0].left;

    return {
      transform: `translate(${translateLeft}px,${translateTop}px)`,
    };
  };

  return (
    <>
      <div className="map__cover">
        <img src={map} alt="Course map" className="map" useMap="#image-map" />

        <span
          className="map__teepad"
          style={getPlayersPosition(currentHole, teepadsPositions)}
        ></span>
      </div>

      <map name="image-map">
        {holesMap.map((hole) => (
          <area
            key={hole.id}
            alt={`Plocha jamky č. ${hole.id}`}
            title={`Hole ${hole.id}`}
            coords={hole.coords}
            shape="poly"
            onClick={() => {
              startQuestion(!gameState);
            }}
          />
        ))}
      </map>
    </>
  );
};

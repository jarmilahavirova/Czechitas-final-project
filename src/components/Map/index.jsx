import "./style.css";
import map from "../../../assets/map.jpg";
import mapMobile from "../../../assets/map_mobile.jpg";
import { usePlayers } from "../../PlayersContext";
import { useEffect, useRef } from "react";

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

const holesMapMobile = [
  {
    id: 1,
    coords: "23,144,39,144,75,293,106,342,68,365,34,247",
  },
  {
    id: 2,
    coords: "43,588,53,595,130,412,151,248,149,223,123,223,104,386",
  },
  {
    id: 3,
    coords: "162,240,176,238,192,326,181,370,158,399,140,379,156,331",
  },
  {
    id: 4,
    coords: "222,373,243,373,242,186,282,49,284,21,265,15,222,120,217,195",
  },
  {
    id: 5,
    coords: "274,155,291,155,296,313,287,393,254,382",
  },
  {
    id: 6,
    coords: "235,488,257,505,219,629,215,750,193,820,161,807,180,712,187,626",
  },
  {
    id: 7,
    coords: "188,836,210,838,220,949,214,988,193,991,184,925",
  },
  {
    id: 8,
    coords: "165,1015,183,1015,198,1114,192,1189,163,1191",
  },
  {
    id: 9,
    coords: "129,1159,147,1154,128,932,91,786,45,774,39,807,64,816",
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

const teepadsPositionsMobile = [
  {
    id: 1,
    top: 137,
    left: 16,
  },
  {
    id: 2,
    top: 568,
    left: 33,
  },
  {
    id: 3,
    top: 232,
    left: 152,
  },
  {
    id: 4,
    top: 346,
    left: 213,
  },
  {
    id: 5,
    top: 147,
    left: 264,
  },
  {
    id: 6,
    top: 491,
    left: 222,
  },
  {
    id: 7,
    top: 827,
    left: 182,
  },
  {
    id: 8,
    top: 1006,
    left: 156,
  },
  {
    id: 9,
    top: 1128,
    left: 118,
  },
];

export const Map = ({ currentHole, startQuestion, gameSetting }) => {
  const { gameState } = usePlayers();
  const reference = useRef(null);

  const getPlayersPosition = (currentPosition, teepadsArray) => {
    const translateTop =
      teepadsArray[currentPosition].top - teepadsArray[0].top;
    const translateLeft =
      teepadsArray[currentPosition].left - teepadsArray[0].left;

    return {
      transform: `translate(${translateLeft}px,${translateTop}px)`,
    };
  };

  useEffect(() => {
    reference.current.focus();
  }, [currentPosition]);

  return (
    <>
      <div className="map__block map__block--desktop">
        <div className="map__cover">
          <img src={map} alt="Course map" className="map" useMap="#image-map" />

          <span
            className={`map__meeple ${
              gameState === "tournament"
                ? "map__meeple--double"
                : "map__meeple--single"
            }`}
            style={getPlayersPosition(currentHole, teepadsPositions)}
            ref={reference}
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
              onClick={
                currentHole === hole.id - 1
                  ? () => {
                      startQuestion(!gameSetting);
                    }
                  : null
              }
              className={
                currentHole === hole.id - 1
                  ? "map__hole-surface"
                  : "map__hole-surface map__hole-surface--disabled"
              }
            />
          ))}
        </map>
      </div>

      <div className="map__block map__block--mobile">
        <div className="map__cover">
          <img
            src={mapMobile}
            alt="Course map"
            className="map"
            useMap="#image-mapMobile"
          />

          <span
            className={`map__meeple ${
              gameState === "tournament"
                ? "map__meeple--double"
                : "map__meeple--single"
            }`}
            style={getPlayersPosition(currentHole, teepadsPositionsMobile)}
          ></span>
        </div>

        <map name="image-mapMobile">
          {holesMapMobile.map((hole) => (
            <area
              key={hole.id}
              alt={`Plocha jamky č. ${hole.id}`}
              title={`Hole ${hole.id}`}
              coords={hole.coords}
              shape="poly"
              onClick={
                currentHole === hole.id - 1
                  ? () => {
                      startQuestion(!gameSetting);
                    }
                  : null
              }
              className={
                currentHole === hole.id - 1
                  ? "map__hole-surface"
                  : "map__hole-surface map__hole-surface--disabled"
              }
            />
          ))}
        </map>
      </div>
    </>
  );
};

import Head from "next/head";
import Header from "@/components/HomePage/Header.js";
import SearchForm from "@/components/HomePage/SearchForm.js";
import styles from "@/styles/Index.module.scss";
import Link from "next/link";
import CategoryBar from "@/components/HomePage/CategoryBar";
import HomeProperty from "@/components/HomePage/HomeProperty/HomeProperty.js";
import RadioButton from "@/components/HomePage/RadioButton.js";
import FilterContainer from "@/components/HomePage/FilterContainer.js";
import React from "react";
import Checkbox from "@/components/HomePage/Checkbox.js";
import PropertyType from "@/components/HomePage/PropertyTypeB.js";
import { motion } from "framer-motion";
import OuterFilterContainer from "@/components/HomePage/OuterFilterContainer.js";
import Json from "@/components/jsondata.js";

let categories = [
  "All homes",
  "National parks",
  "Mansions",
  "Castles",
  "Golfing",
  "Amazing pools",
  "Amazing views",
  "Golfing",
  "Off-the-grid",
  "Lakefront",
  "Design",
  "Play",
  "Adapted",
  "Treehouses",
  "Historical homes",
];

let imgArray;

export const SearchFilterContext = React.createContext();

export default function Home() {
  const [visibility, setVisibility] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("All homes");
  const [isOpen, setIsOpen] = React.useState(false);
  function updateVisibility(number) {
    setVisibility((prev) => !prev);
    if (number == 1) {
      setIsOpen((prev) => !prev);
      setFilterState(finalState);
    } else if (number == 2) {
      setIsOpen(false);
      setFilterState(finalState);
    } else if (number == 3) {
      setIsOpen(false);
      setFinalState(filterState);
      setSearchIncrement((prev) => prev + 1);
      setTimeout(
        setFilterState({
          Amenities: Array(25),
          Languages: Array(9),
          guests: 0,
          rooms_and_beds: Array(3),
          maxPrice: 480,
          minPrice: 0,
          PropertyType: Array(4),
          AccessibilityFeatures: Array(10),
          TypeOfPlace: Array(3),
        }),
        100
      );
    }
  }

  const [searchState, setSearchState] = React.useState({
    region: "I'm flexible",
    guests: 0,
  });

  const [searchIncrement, setSearchIncrement] = React.useState(0);
  const [filtered2, setFiltered2] = React.useState(false);
  const [filtered3, setFiltered3] = React.useState(false);

  const [filterState, setFilterState] = React.useState({
    Amenities: Array(25),
    Languages: Array(9),
    guests: 0,
    rooms_and_beds: Array(3),
    maxPrice: 480,
    minPrice: 0,
    PropertyType: Array(4),
    AccessibilityFeatures: Array(10),
    TypeOfPlace: Array(3),
    ExtraBenefits: Array(3),
  });

  const [finalState, setFinalState] = React.useState({
    Amenities: Array(25),
    Languages: Array(9),
    guests: 0,
    rooms_and_beds: Array(3),
    maxPrice: 480,
    minPrice: 0,
    PropertyType: Array(4),
    AccessibilityFeatures: Array(10),
    TypeOfPlace: Array(3),
    ExtraBenefits: Array(3),
  });

  let value = {
    searchState,
    setSearchState,
    searchIncrement,
    setSearchIncrement,
    filterState,
    setFilterState,
    finalState,
    setFinalState,
  };

  let preFiltered = Json;
  let filtered1;

  React.useEffect(() => {
    let nextFilter;
    if (selectedCategory == "All homes") {
      filtered1 = preFiltered;
    } else {
      filtered1 = preFiltered.filter(
        (property) => property.category == selectedCategory
      );
    }
    if (searchState.region == "I'm flexible" && searchState.guests == 0) {
      setFiltered2(filtered1);
      nextFilter = filtered1;
    } else if (searchState.region == "I'm flexible") {
      if (parseInt(searchState.guests) >= 8) {
        setFiltered2(() => {
          return filtered1.filter(
            (property) => parseInt(property.number_beds) >= 8
          );
        });
        nextFilter = filtered1.filter(
          (property) => parseInt(property.number_beds) >= 8
        );
      } else {
        setFiltered2(() => {
          return filtered1.filter(
            (property) =>
              parseInt(property.number_beds) >= parseInt(searchState.guests)
          );
        });
        nextFilter = filtered1.filter(
          (property) =>
            parseInt(property.number_beds) >= parseInt(searchState.guests)
        );
      }
    }
    //if there are 8 guests or more, allow only houses with 8+ beds
    else {
      if (parseInt(searchState.guests) >= 15) {
        setFiltered2(() => {
          return filtered1.filter(
            (property) =>
              parseInt(property.number_beds) >= 8 &&
              (property.Region1 == searchState.region ||
                property.Region2 == searchState.region)
          );
        });
        nextFilter = filtered1.filter(
          (property) =>
            parseInt(property.number_beds) >= 8 &&
            (property.Region1 == searchState.region ||
              property.Region2 == searchState.region)
        );
      } else {
        // if there are less than 8 guests, check that guests are below beds and check regions
        setFiltered2(() => {
          return filtered1.filter(
            (property) =>
              parseInt(property.number_beds) * 2 >=
                parseInt(searchState.guests) &&
              (searchState.region == property.Region1 ||
                searchState.region == property.Region2)
          );
        });
        nextFilter = filtered1.filter(
          (property) =>
            parseInt(property.number_beds) * 2 >=
              parseInt(searchState.guests) &&
            (searchState.region == property.Region1 ||
              searchState.region == property.Region2)
        );
      }
    }
    let filterArray = [
      "maxPrice",
      "minPrice",
      "TypeOfPlace",
      "Bedrooms",
      "Beds",
      "Bathrooms",
      "PropertyType",
      "Amenities",
      "AccessibilityFeatures",
      "Languages",
      "ExtraBenefits",
    ];

    let finalFilters = changedArray(filterArray);

    setFiltered3(() => {
      let tempFilter = nextFilter;
      if (finalFilters.length == 0) {
        return nextFilter;
      } else {
        for (let i = 0; i < finalFilters.length; i++) {
          if (finalFilters[i] == "TypeOfPlace") {
            tempFilter = tempFilter.filter((property) =>
              finalState.TypeOfPlace.includes(property.room_type)
            );
          }
          if (finalFilters[i] == "Amenities") {
            let numberToFilter = [];
            for (let k = 0; k < nextFilter.length; k++) {
              let noAmenity = false;
              for (let i = 0; i < finalState.Amenities.length; i++) {
                let count = 0;
                if (finalState.Amenities[i]) {
                  for (let j = 0; j < 10; j++) {
                    let amenitySnippet = `amenity${j + 1}`;
                    if (
                      nextFilter[k][[amenitySnippet]] == finalState.Amenities[i]
                    ) {
                      count -= 1;
                    }
                  }
                  if (count == 0) {
                    noAmenity = true;
                  }
                }
              }
              if (noAmenity) {
                numberToFilter.push(k);
              }
            }

            if (numberToFilter.length != 0) {
              console.log(numberToFilter);
              nextFilter = nextFilter.filter((property, index) => {
                let keep = true;
                for (let i = 0; i < numberToFilter.length; i++) {
                  if (index == numberToFilter[i]) {
                    keep = false;
                  }
                }
                return keep;
              });
            }
          }
        }
      }
      return tempFilter;
    });
    if (finalFilters.length == 0) {
      nextFilter = nextFilter;
    } else {
      for (let i = 0; i < finalFilters.length; i++) {
        if (finalFilters[i] == "TypeOfPlace") {
          nextFilter = nextFilter.filter((property) =>
            finalState.TypeOfPlace.includes(property.room_type)
          );
        }
        if (finalFilters[i] == "Amenities") {
          let numberToFilter = [];
          for (let k = 0; k < nextFilter.length; k++) {
            let noAmenity = false;
            for (let i = 0; i < finalState.Amenities.length; i++) {
              let count = 0;
              if (finalState.Amenities[i]) {
                for (let j = 0; j < 10; j++) {
                  let amenitySnippet = `amenity${j + 1}`;
                  if (
                    nextFilter[k][[amenitySnippet]] == finalState.Amenities[i]
                  ) {
                    count -= 1;
                    console.log(j);
                  }
                }
                if (count == 0) {
                }
              }
            }
            if (noAmenity) {
              numberToFilter.push(k);
            }
          }

          //if there isn't an amenity, number to filter gets a number. Check ths numberagainst nextfilter and filter if false
          if (numberToFilter.length != 0) {
            nextFilter = nextFilter.filter((property, index) => {
              let keep = true;
              for (let i = 0; i < numberToFilter.length; i++) {
                if (index == numberToFilter[i]) {
                  keep = false;
                }
              }
              return keep;
            });
          }
        }
        if (finalFilters[i] == "AccessibilityFeatures") {
          let numberToFilter = [];
          for (let k = 0; k < nextFilter.length; k++) {
            let noAccessibility = false;
            for (let i = 0; i < finalState.AccessibilityFeatures.length; i++) {
              let count = 0;

              //look through accessibility features and check if they match the Json
              if (finalState.AccessibilityFeatures[i]) {
                for (let j = 0; j < 10; j++) {
                  let accessibilitySnippet = `accessibility${j + 1}`;
                  if (
                    nextFilter[k][[accessibilitySnippet]] ==
                    finalState.AccessibilityFeatures[i]
                  ) {
                    count -= 1;
                  }
                }
                if (count == 0) {
                  noAccessibility = true;
                }
              }
            }
            if (noAccessibility) {
              numberToFilter.push(k);
            }
          }

          //if there isn't an amenity, number to filter gets a number. Check ths numberagainst nextfilter and filter if false
          if (numberToFilter.length != 0) {
            nextFilter = nextFilter.filter((property, index) => {
              let keep = true;
              for (let i = 0; i < numberToFilter.length; i++) {
                if (index == numberToFilter[i]) {
                  keep = false;
                }
              }
              return keep;
            });
          }
        }
        if (finalFilters[i] == "Languages") {
          let numberToFilter = [];
          for (let k = 0; k < nextFilter.length; k++) {
            let noLanguage = false;
            for (let i = 0; i < finalState.Languages.length; i++) {
              let count = 0;
              if (finalState.Languages[i]) {
                for (let j = 0; j < 2; j++) {
                  let languageSnippet = `language${j + 1}`;
                  if (
                    nextFilter[k][[languageSnippet]] == finalState.Languages[i]
                  ) {
                    count -= 1;
                  }
                }
                if (count == 0) {
                  noLanguage = true;
                }
              }
            }
            if (noLanguage) {
              numberToFilter.push(k);
            }
          }

          //if there isn't an amenity, number to filter gets a number. Check ths numberagainst nextfilter and filter if false
          if (numberToFilter.length != 0) {
            nextFilter = nextFilter.filter((property, index) => {
              let keep = true;
              for (let i = 0; i < numberToFilter.length; i++) {
                if (index == numberToFilter[i]) {
                  keep = false;
                }
              }
              return keep;
            });
          }
        }
        if (finalFilters[i] == "ExtraBenefits") {
          let numberToFilter = [];
          for (let k = 0; k < nextFilter.length; k++) {
            let noBenefits = false;
            for (let i = 0; i < finalState.ExtraBenefits.length; i++) {
              let count = 0;
              if (finalState.ExtraBenefits[i]) {
                for (let j = 0; j < 3; j++) {
                  let extraBenefitsSnippet = `extra_benefits${j + 1}`;
                  if (
                    nextFilter[k][[extraBenefitsSnippet]] ==
                    finalState.ExtraBenefits[i]
                  ) {
                    count -= 1;
                  }
                }
                if (count == 0) {
                  noBenefits = true;
                }
              }
            }
            if (noBenefits) {
              numberToFilter.push(k);
            }
          }

          //if there isn't an amenity, number to filter gets a number. Check ths numberagainst nextfilter and filter if false
          if (numberToFilter.length != 0) {
            nextFilter = nextFilter.filter((property, index) => {
              let keep = true;
              for (let i = 0; i < numberToFilter.length; i++) {
                if (index == numberToFilter[i]) {
                  keep = false;
                }
              }
              return keep;
            });
          }
        }
        if (finalFilters[i] == "PropertyType") {
          nextFilter = nextFilter.filter((property) =>
            finalState.PropertyType.includes(property.property_type)
          );
        }
        if (finalFilters[i] == "Bedrooms") {
          if (finalState.rooms_and_beds[0] < 8) {
            nextFilter = nextFilter.filter(
              (property) =>
                finalState.rooms_and_beds[0] <= property.number_bedrooms
            );
          } else {
            nextFilter = nextFilter.filter(
              (property) =>
                finalState.rooms_and_beds[0] <= property.number_bedrooms
            );
          }
        }
        if (finalFilters[i] == "Beds") {
          if (finalState.rooms_and_beds[1] < 8) {
            nextFilter = nextFilter.filter(
              (property) => finalState.rooms_and_beds[1] <= property.number_beds
            );
          } else {
            nextFilter = nextFilter.filter(
              (property) => finalState.rooms_and_beds[1] <= property.number_beds
            );
          }
        }
        if (finalFilters[i] == "Bathrooms") {
          if (finalState.rooms_and_beds[2] < 8) {
            nextFilter = nextFilter.filter(
              (property) =>
                finalState.rooms_and_beds[2] <= property.number_bathrooms
            );
          } else {
            nextFilter = nextFilter.filter(
              (property) =>
                finalState.rooms_and_beds[2] <= property.number_bathrooms
            );
          }
        }
        if (finalFilters[i] == "maxPrice") {
          if (finalState.maxPrice < 480) {
            nextFilter = nextFilter.filter(
              (property) => finalState.maxPrice >= property.price
            );
          }
        }
        if (finalFilters[i] == "minPrice") {
          if (finalState.minPrice > 0) {
            nextFilter = nextFilter.filter(
              (property) => finalState.minPrice <= property.price
            );
          }
        }
      }
    }
    imgArray = [];
    for (let i = 1; i < nextFilter.length + 1; i++) {
      imgArray[i - 1] = [];
      for (let j = 1; j < 6; j++) {
        let link = `/images/property_images/${nextFilter[i - 1].id}/${
          nextFilter[i - 1].id
        }${j}.webp`;
        imgArray[i - 1].push(link);
      }
    }
  }, [selectedCategory, searchIncrement]);

  let gridRowsVariable = "";
  if (filtered2 != false) {
    let gridRows = parseInt(filtered2.length / 4) + 1;
    for (let i = 0; i < gridRows; i++) {
      gridRowsVariable += "20vw ";
    }
  }

  //creates an array with the changed properties
  function changedArray(array) {
    let checkedArray = [];
    for (let i = 0; i < array.length; i++) {
      if (checkMarkCheck(array[i])) {
        checkedArray.push(array[i]);
      }
    }
    return checkedArray;
  }

  //checks to see if changed
  function checkMarkCheck(name) {
    let checkCount = 0;
    if (
      name == "TypeOfPlace" ||
      name == "Amenities" ||
      name == "AccessibilityFeatures" ||
      name == "Languages" ||
      name == "PropertyType" ||
      name == "ExtraBenefits"
    ) {
      for (let i = 0; i < finalState[name].length; i++) {
        if (finalState[name][i]) {
          checkCount += 1;
        }
      }
    }
    if (name == "minPrice") {
      if (finalState[name] > 0) {
        checkCount += 1;
      }
    }
    if (name == "maxPrice") {
      if (finalState[name] < 480) {
        checkCount += 1;
      }
    }
    if (name == "Bedrooms") {
      if (finalState.rooms_and_beds[0]) {
        checkCount += 1;
      }
    }
    if (name == "Bathrooms") {
      if (finalState.rooms_and_beds[2]) {
        checkCount += 1;
      }
    }
    if (name == "Beds") {
      if (finalState.rooms_and_beds[1]) {
        checkCount += 1;
      }
    }
    if (checkCount > 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchFilterContext.Provider value={value}>
        <Header />
      </SearchFilterContext.Provider>
      <CategoryBar
        categories={categories}
        updateVisibility={updateVisibility}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SearchFilterContext.Provider value={value}>
        <main>
          {imgArray && (
            <div
              className={styles.carouselwrapper}
              style={{ gridTemplateRows: gridRowsVariable }}
            >
              {filtered3.map((property, index) => {
                return (
                  <HomeProperty
                    carouselImages={imgArray[index]}
                    price={property.price}
                    stars="5.0"
                    location={`${property.city_id}, ${property.country}`}
                    key={index}
                    index={index}
                    id={property.id}
                  />
                );
              })}
            </div>
          )}
          <OuterFilterContainer
            visibility={visibility}
            updateVisibility={updateVisibility}
          />
          <div
            className={visibility ? styles.grey : styles.hidden}
            onClick={() => updateVisibility(2)}
          ></div>
        </main>
      </SearchFilterContext.Provider>
    </>
  );
}

//can also do router.push

//works after submit

//if price is greater than low and less than high
//type of place - run through array - for each place type in the array - check name in object (i.e. "variable name": object)

//bedrooms, beds, bathrooms -  if "any", don't filter by it, otherwise <=
//can create function for variable in array, i.e. first array with three objects on supply side - each object with name: number,
//next iterate through array with for loop and for each compare <=

//property type - iterate through array of objects, if none then include all, else grab key, check if appropriate object in json with that key has the type || next key has type || next key has type

//amenities - iterate through array and amenity${1}

//booking options - iterate through array and amenity ${}

//same for accessibility, superhost,

//languages - similar to property type flow

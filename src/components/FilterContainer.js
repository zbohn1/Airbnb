import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/FilterContainer.module.scss";
import FilterInner from "@/components/FilterInner.js";
import PriceSlider from "@/components/PriceSlider.js";
import Checkbox from "@/components/Checkbox.js";
import Spacer from "@/components/Spacer.js";
import FilterBGroup from "@/components/FilterBGroup.js";
import PropertyTypeB from "@/components/PropertyTypeB.js";
import RadioContainer from "@/components/RadioContainer.js";

const roomPlusBeds = ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"];
const amenities10 = [
  "Mountain view",
  "Dedicated workspace",
  "TV",
  "Free dryer",
  "Hair dryer",
  "Wifi",
  "Free parking on premises",
  "Free washer",
  "Private backyard",
  "Refrigerator",
];
const amenitiesrest = [
  "Garden view",
  "Watefront",
  "Pets allowed",
  "Park view",
  "Kitchen",
  "Private sauna",
  "Courtyard view",
  "Air conditioning",
  "Indoor fireplace",
  "Breakfast",
  "Long term stays allowed",
  "Private pool",
];

const accessibilityFeatures = [
  "Step-free guest entrance",
  "Guest entrance wider than 32 inches",
  "Accessible parking spot",
  "Step-free bedroom access",
  "Bedroom entrance wider than 32 inches",
  "Step-free bathroom access",
  "Step-free access to the bathrooms",
  "Bathroom entrance wider than 32 inches",
  "Shower grab bar",
  "Toilet grab bar",
];

const languages = [
  "English",
  "German",
  "France",
  "Spanish",
  "Swedish",
  "Italian",
  "French",
  "Hindi",
  "Danish",
];

const FilterContainer = () => {
  const [nextAmenities, setNextAmenities] = React.useState(false);

  function toggleAmenities() {
    setNextAmenities(!nextAmenities);
  }
  return (
    <>
      <div className={styles.filtercontainer}>
        <FilterInner
          header="Price range"
          subheader="The average nightly price is $353"
        >
          <PriceSlider />
        </FilterInner>
        <FilterInner header="Type of place">
          <Spacer />
          <div className={styles.typeofflex}>
            <Checkbox
              checkLabel="Entire place"
              subLabel="A place to yourself"
            />
            <Checkbox
              checkLabel="Private room"
              subLabel="Your own room in a home or a hotel, plus some shared common spaces"
            />
          </div>
        </FilterInner>
        <FilterInner header="Rooms and beds">
          <Spacer />
          <FilterBGroup buttonArray={roomPlusBeds} header="Bedrooms" />
          <FilterBGroup buttonArray={roomPlusBeds} header="Beds" />
          <FilterBGroup buttonArray={roomPlusBeds} header="Bathrooms" />
        </FilterInner>
        <FilterInner header="Property Type">
          <Spacer />
          <div className={styles.flexproperty}>
            <PropertyTypeB
              typeDescription="House"
              typeImg={"/images/property_type/House.png"}
            />
            <PropertyTypeB
              typeDescription="Apartment"
              typeImg={"/images/property_type/Apartment.png"}
            />
            <PropertyTypeB
              typeDescription="Guesthouse"
              typeImg={"/images/property_type/Guesthouse.png"}
            />
            <PropertyTypeB
              typeDescription="Hotel"
              typeImg={"/images/property_type/Hotel.png"}
            />
          </div>
          <Spacer />
        </FilterInner>
        <FilterInner header="Amenities">
          <Spacer />
          <div className={styles.amenityflex}>
            {amenities10.map((value, index) => {
              return <Checkbox checkLabel={value} key={index} index={index} />;
            })}
            {!nextAmenities && (
              <button onClick={toggleAmenities}>See more</button>
            )}
            {nextAmenities &&
              amenitiesrest.map((value, index) => {
                return (
                  <Checkbox checkLabel={value} key={index} index={index} />
                );
              })}
            {nextAmenities && (
              <button onClick={toggleAmenities}>See Less</button>
            )}
          </div>
          <Spacer />
        </FilterInner>
        <FilterInner header="Booking Options">
          <Spacer />
          <RadioContainer
            header="Self Check-in"
            subheader="Easy access to the property once you arrive"
          />
          <RadioContainer
            header="Free Cancellation"
            subheader="Only show stays that offer free cancellation"
          />
          <Spacer />
        </FilterInner>
        <FilterInner
          header="Accessibility Features"
          subheader="This information was provided by the host and reviewed by Airbnb"
        >
          <Spacer />
          <div className={styles.amenityflex}>
            {accessibilityFeatures.map((value, index) => {
              return <Checkbox checkLabel={value} key={index} index={index} />;
            })}
          </div>
          <Spacer />
        </FilterInner>
        <FilterInner header="Top Tier Stays">
          <Spacer />
          <RadioContainer
            header="Superhost"
            subheader="Stay with recognized Hosts"
          />
          <Spacer />
        </FilterInner>
        <FilterInner header="Host Language">
          <Spacer />
          <div className={styles.amenityflex}>
            {languages.map((value, index) => {
              return <Checkbox checkLabel={value} key={index} index={index} />;
            })}
          </div>
        </FilterInner>
      </div>
    </>
  );
};

export default FilterContainer;

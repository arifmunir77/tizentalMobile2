import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import StepsComponent from '../../components/StepsComponent';
import RadioButton from '../../components/RadioButton';
import {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {useForm} from 'react-hook-form';
import {mergeObjs} from '../../utils/ObjectUtils';
import {useAppState} from '../../hooks/useAppState';

const BuildingDetails = ({currentStep, setCurrentStep}) => {
  const [stepValues, setStepValues] = useAppState();

  const [otherFeatures, setOtherFeatures] = useState([]);

  const handlePrevStep = unit => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextStep = () => {
    handleSubmit(submit)();
  };

  const submit = data => {
    setStepValues({...stepValues, ...data, otherFeatures: otherFeatures});
    setCurrentStep(currentStep + 1);
  };
 

  const {register, setError, handleSubmit, formState, watch, reset, setValue} =
    useForm({
      defaultValues: mergeObjs(stepValues, {
        building_quality: 'low',
        roof_type: 'gableRoof',
        kitchens_quality: 'kitAverage',
        bathroom_quality: 'bathOlder',
        airconditioning_type: 'windowsUnits',
        exterior_type: 'brickExterior',
        parking_type: 'noParking',
      }),
      mode: 'onSubmit',
    });
  const {errors} = formState;

  useEffect(() => {
    if (stepValues?.otherFeatures) {
      setOtherFeatures(stepValues?.otherFeatures);
    }
  }, [stepValues]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Building Details</Text>
          <Text style={styles.description}>
            Check off any that apply about the building
          </Text>

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/carbon_building.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Building Quality</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Low"
                value="low"
                checked={watch('building_quality') == 'low'}
                name={'building_quality'}
                onChange={val => {
                  setValue('building_quality', val);
                }}
              />
              <RadioButton
                label="Average"
                value="average"
                checked={watch('building_quality') == 'average'}
                name={'building_quality'}
                onChange={val => {
                  setValue('building_quality', val);
                }}
              />
              <RadioButton
                label="High"
                value="high"
                checked={watch('building_quality') == 'high'}
                name={'building_quality'}
                onChange={val => {
                  setValue('building_quality', val);
                }}
              />
            </View>
          </View>

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/roof.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Roof</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Gable Roof"
                value="gableRoof"
                checked={watch('roof_type') == 'gableRoof'}
                name={'roof_type'}
                onChange={val => {
                  setValue('roof_type', val);
                }}
              />
              <RadioButton
                label="Flat Roof"
                value="flatRoof"
                checked={watch('roof_type') == 'flatRoof'}
                name={'roof_type'}
                onChange={val => {
                  setValue('roof_type', val);
                }}
              />
            </View>
          </View>

          {/* Kitchen */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/kitchen.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Kitchen</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Older"
                value="kitOlder"
                checked={watch('kitchens_quality') == 'kitOlder'}
                name={'kitchens_quality'}
                onChange={val => {
                  setValue('kitchens_quality', val);
                }}
              />
              <RadioButton
                label="Average"
                value="kitAverage"
                checked={watch('kitchens_quality') == 'kitAverage'}
                name={'kitchens_quality'}
                onChange={val => {
                  setValue('kitchens_quality', val);
                }}
              />
              <RadioButton
                label="High End"
                value="kitHighEnd"
                checked={watch('kitchens_quality') == 'kitHighEnd'}
                name={'kitchens_quality'}
                onChange={val => {
                  setValue('kitchens_quality', val);
                }}
              />
            </View>
          </View>

          {/* Kitchen */}

          {/* Bathrooms */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/bathroom.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}>Bathrooms</Text>
          </View>
          <View>
            <View style={styles.radioContainer}>
              <RadioButton
                label="Older"
                value="bathOlder"
                checked={watch('bathroom_quality') == 'bathOlder'}
                name={'bathroom_quality'}
                onChange={val => {
                  setValue('bathroom_quality', val);
                }}
              />
              <RadioButton
                label="Average"
                value="bathAverage"
                checked={watch('bathroom_quality') == 'bathAverage'}
                name={'bathroom_quality'}
                onChange={val => {
                  setValue('bathroom_quality', val);
                }}
              />
              <RadioButton
                label="High End"
                value="bathHighEnd"
                checked={watch('bathroom_quality') == 'bathHighEnd'}
                name={'bathroom_quality'}
                onChange={val => {
                  setValue('bathroom_quality', val);
                }}
              />
            </View>
          </View>

          {/* Bathrooms */}

          {/* Air Conditoning */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/air-conditioning.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Air Conditoning</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="Non Air Conditioning"
                value="NoAirConditioning"
                checked={watch('airconditioning_type') == 'NoAirConditioning'}
                name={'airconditioning_type'}
                onChange={val => {
                  setValue('airconditioning_type', val);
                }}
              />
              <RadioButton
                label="Window Unts"
                value="windowsUnits"
                checked={watch('airconditioning_type') == 'windowsUnits'}
                name={'airconditioning_type'}
                onChange={val => {
                  setValue('airconditioning_type', val);
                }}
              />
              <RadioButton
                label="Through-wall condtitioners"
                value="throughWall"
                checked={watch('airconditioning_type') == 'throughWall'}
                name={'airconditioning_type'}
                onChange={val => {
                  setValue('airconditioning_type', val);
                }}
              />
              <RadioButton
                label="Central air condtitioners"
                value="centralAC"
                checked={watch('airconditioning_type') == 'centralAC'}
                name={'airconditioning_type'}
                onChange={val => {
                  setValue('airconditioning_type', val);
                }}
              />
            </View>
          </View>

          {/*  Air Conditoning */}

          {/* Exterior */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/exterior.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Exterior</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="Brick Exterior"
                value="brickExterior"
                checked={watch('exterior_type') == 'brickExterior'}
                name={'exterior_type'}
                onChange={val => {
                  setValue('exterior_type', val);
                }}
              />
              <RadioButton
                label="Wood Exterior"
                value="woodExterior"
                checked={watch('exterior_type') == 'woodExterior'}
                name={'exterior_type'}
                onChange={val => {
                  setValue('exterior_type', val);
                }}
              />
              <RadioButton
                label="Vinyl or aluminum exterior"
                value="aluminumExterior"
                checked={watch('exterior_type') == 'aluminumExterior'}
                name={'exterior_type'}
                onChange={val => {
                  setValue('exterior_type', val);
                }}
              />
              <RadioButton
                label="Asbestos shingle exterior"
                value="shingleExterior"
                checked={watch('exterior_type') == 'shingleExterior'}
                name={'exterior_type'}
                onChange={val => {
                  setValue('exterior_type', val);
                }}
              />
            </View>
          </View>

          {/*  Exterior */}

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/parking.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Parking</Text>
          </View>
          <View>
            <View style={styles.radioAirContainer}>
              <RadioButton
                label="No parking on-site"
                value="noParking"
                checked={watch('parking_type') == 'noParking'}
                name={'parking_type'}
                onChange={val => {
                  setValue('parking_type', val);
                }}
              />
              <RadioButton
                label="Limited parking on-site"
                value="limitedParking"
                checked={watch('parking_type') == 'limitedParking'}
                name={'parking_type'}
                onChange={val => {
                  setValue('parking_type', val);
                }}
              />
              <RadioButton
                label="About one space per unit on site"
                value="spacePerUnit"
                checked={watch('parking_type') == 'spacePerUnit'}
                name={'parking_type'}
                onChange={val => {
                  setValue('parking_type', val);
                }}
              />
              <RadioButton
                label="More than one space per bedroom on site"
                value="spacePerBedroom"
                checked={watch('parking_type') == 'spacePerBedroom'}
                name={'parking_type'}
                onChange={val => {
                  setValue('parking_type', val);
                }}
              />

              <RadioButton
                label="Overnight street parking is available"
                value="overnight_parking_available"
                checked={watch('parking_type') == 'overnight_parking_available'}
                name={'parking_type'}
                onChange={val => {
                  setValue('parking_type', val);
                }}
              />
            </View>
          </View>

          {/* <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              onValueChange={checked => {
                if (checked) {
                  setValue('moreSpacePerBedroom');
                } else {
                  set_neighborhood_conditions(
                    neighborhood_conditions.filter(
                      item => item !== 'quietNeighborhood',
                    ),
                  );
                }
              }}
              value={watch()}
            />
            <Text style={styles.checkboxLabel}>
              Overnight street parking is available
            </Text>
          </View> */}

          {/*  Parking */}

          {/* Parking */}

          <View style={styles.legendContainer}>
            <Image
              source={require('../../assets/images/carbon_building.png')}
              style={styles.legendImage}
            />
            <Text style={styles.label2}> Other Features</Text>
          </View>
          <View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'elevators']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'elevators'),
                    );
                  }
                }}
                value={otherFeatures?.includes('elevators')}
              />
              <Text style={styles.checkboxLabel}>Elevator or elevators</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'indoorPool']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'indoorPool'),
                    );
                  }
                }}
                value={otherFeatures?.includes('indoorPool')}
              />
              <Text style={styles.checkboxLabel}>Indoor pool</Text>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'outdoorPool']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'outdoorPool'),
                    );
                  }
                }}
                value={otherFeatures?.includes('outdoorPool')}
              />
              <Text style={styles.checkboxLabel}>Outdoor pool</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'tennisCourt']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'tennisCourt'),
                    );
                  }
                }}
                value={otherFeatures?.includes('tennisCourt')}
              />
              <Text style={styles.checkboxLabel}>Tennis court or courts</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'roofDeck']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'roofDeck'),
                    );
                  }
                }}
                value={otherFeatures?.includes('roofDeck')}
              />
              <Text style={styles.checkboxLabel}>Roof deck</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'laundryRoom']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'laundryRoom'),
                    );
                  }
                }}
                value={otherFeatures?.includes('laundryRoom')}
              />
              <Text style={styles.checkboxLabel}>Laundry room</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'balconies']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(item => item !== 'balconies'),
                    );
                  }
                }}
                value={otherFeatures?.includes('balconies')}
              />
              <Text style={styles.checkboxLabel}>Balconies and patios</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                style={styles.checkbox}
                onValueChange={checked => {
                  if (checked) {
                    setOtherFeatures([...otherFeatures, 'laundryFacilities']);
                  } else {
                    setOtherFeatures(
                      otherFeatures.filter(
                        item => item !== 'laundryFacilities',
                      ),
                    );
                  }
                }}
                value={otherFeatures?.includes('laundryFacilities')}
              />
              <Text style={styles.checkboxLabel}>
                In-unit laundry facilities
              </Text>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              style={styles.checkbox}
              onValueChange={checked => {
                if (checked) {
                  setOtherFeatures([...otherFeatures, 'storageCubicles']);
                } else {
                  setOtherFeatures(
                    otherFeatures.filter(item => item !== 'storageCubicles'),
                  );
                }
              }}
              value={otherFeatures?.includes('storageCubicles')}
            />
            <Text style={styles.checkboxLabel}>Storage cubicles</Text>
          </View>

          {/*  Features */}
        </View>
      </ScrollView>

      <StepsComponent
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    // fontWeight: 600,
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    // fontWeight: 600,
  },
  legendContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 25,
  },
  label2: {
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: 'center',
  },
  legendImage: {
    // marginTop: 20,
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default BuildingDetails;

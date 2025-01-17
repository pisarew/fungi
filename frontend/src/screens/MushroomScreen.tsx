import {
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from "react-native";
import MushList from "../db/mushrooms";
import { colors } from "../colors";
import { Mushroom } from "@fungi/db";
import { trpc } from "../lib/trpc";

type Props = {
  id: number;
  onClose: () => void;
};

export const MushroomScreen: React.FC<Props> = ({ id, onClose }) => {
  // <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {mushroomStyles.screen}>
  const mushroom = trpc.mushrooms.getById.useQuery({ id });
  return (
    <View style={mushroomScreenStyles.screen}>
      {!mushroom.data && <Text>Ошибка</Text>}
      {!!mushroom.data && (
        <>
          <Text style={mushroomScreenStyles.title}>{mushroom.data.name}</Text>
          <View style={mushroomScreenStyles.imageContainer}>
            <Image
              style={mushroomScreenStyles.image}
              source={require("../../assets/noimg.jpg")}
            />
          </View>
          <View>
            <Text style={mushroomScreenStyles.categoryName}>Семейство:</Text>
            <Text style={mushroomScreenStyles.categoryText}>
              {mushroom.data.family.name}
            </Text>
            <Text style={mushroomScreenStyles.categoryText}>
              {mushroom.data.family.latinName}
            </Text>
          </View>
          <View>
            <Text style={mushroomScreenStyles.categoryName}>
              Красная книга:
            </Text>
            <Text style={mushroomScreenStyles.categoryText}>
              {mushroom.data.redBooked ? "Да" : "Нет"}
            </Text>
          </View>
          <View>
            <Text style={mushroomScreenStyles.categoryName}>Съедобность:</Text>
            <Text style={mushroomScreenStyles.categoryText}>
              {
                {
                  EATABLE: "Съедобен",
                  PARTIALLY_EATABLE: "Условно съедобен",
                  NOT_EATABLE: "Несъедобен",
                }[mushroom.data.eatable]
              }
            </Text>
          </View>
          <View>
            <Text style={mushroomScreenStyles.categoryName}>Описание:</Text>
            <Text style={mushroomScreenStyles.categoryText}>
              {mushroom.data.description}
            </Text>
          </View>
        </>
      )}
      <TouchableOpacity
        style={mushroomScreenStyles.closeButton}
        onPress={onClose}
      >
        <Text style={mushroomScreenStyles.closeText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};
//

const mushroomScreenStyles = StyleSheet.create({
  screen: {
    height: "100%",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    margin: 15,
    textAlign: "center",
  },
  categoryName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  categoryText: {
    fontSize: 18,
  },
  imageContainer: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  closeButton: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    marginTop: 20,
  },
  closeText: {
    color: "#fff",
    textAlign: "center",
    fontWidth: "bold",
    fontSize: 15,
  },
});

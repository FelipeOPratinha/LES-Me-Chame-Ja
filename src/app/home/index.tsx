import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "~/components/header";
import { SearchBar } from "~/components/searchbar";
import { Map } from "~/components/map";
import { VehicleList } from "~/components/vehiclelist";
import { CategoryList } from "~/components/categoryList";

export default function Home() {
  return (
    <LinearGradient
      colors={["#4EA8DE", "#5E60CE", "#4EA8DE"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <View className="flex-1">
        {/* Header fixo no topo */}
        <Header />

        {/* Área principal */}
        <View className="flex-1 flex-col xl:flex-row">
          {/* Mapa fixo (lado esquerdo) */}
          <View className="xl:flex-[2] m-1">
            <Map />
          </View>

          {/* Scroll apenas no conteúdo da direita */}
          <View className="flex-1">
            <ScrollView
              contentContainerClassName="flex flex-col gap-4 m-1"
              showsVerticalScrollIndicator={false}
            >
              <SearchBar />
              <VehicleList />
              <CategoryList />
            </ScrollView>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
// src/components/searchbar/index.tsx
import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome, Entypo, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export function SearchBar() {
  const [extraDestinos, setExtraDestinos] = useState<string[]>([]);

  const handleAddDestino = () => {
    setExtraDestinos([...extraDestinos, ""]);
  };

  const handleRemoveDestino = (index: number) => {
    setExtraDestinos(extraDestinos.filter((_, i) => i !== index));
  };

  return (
    <View className="w-full mt-4">
      {/* Header */}
      <View className="flex-row items-center justify-between bg-white px-2 mb-3 rounded-xl shadow p-2 hover:bg-slate-200">
        <Text className="text-base font-semibold text-[#5E60CE] text-center m-auto">Rota</Text>
      </View>
      <View className="w-full min-w-fit bg-white rounded-xl shadow-md p-2 mb-4 space-y-3">
        {/* Linha 1 - Retirada */}
        <View className="h-10 flex flex-row items-center space-x-2 hover:bg-slate-200 rounded-t-md border-b border-slate-400 justify-start">
          <View className="w-5">
            <Entypo name="circle" size={20} color="#5390D9" className="flex justify-center" />
          </View>
          <TextInput
            placeholder="Retirada (Rua e número)"
            className="flex-1 text-sm text-gray-700 p-2"
            placeholderTextColor="#999"
          />
          <View className="w-fit rounded-lg overflow-hidden">
            <Picker
              selectedValue="Agora"
              onValueChange={() => {}}
              style={{ backgroundColor: "transparent" }}
            >
              <Picker.Item label="Agora" value="Agora" />
              <Picker.Item label="Agendar" value="Agendar" />
            </Picker>
          </View>
        </View>
        {/* Destinos extras aparecem aqui */}
        {extraDestinos.map((_, index) => (
          <View
            key={index}
            className="h-10 flex flex-row items-center space-x-2 hover:bg-slate-200 border-b border-slate-400 justify-between"
          >
            <View className="flex flex-row items-center flex-1 space-x-2">
              <View className="w-5">
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={20}
                  color="#64DFDF"
                  className="flex justify-center"
                />
              </View>
              <TextInput
                placeholder={`Parada ${index + 1}`}
                className="flex-1 text-sm text-gray-700 p-2"
                placeholderTextColor="#999"
              />
            </View>
            {/* Botão remover */}
            <Pressable
              onPress={() => handleRemoveDestino(index)}
              className="p-2 rounded-full hover:bg-slate-300"
            >
              <Ionicons name="close-outline" size={20} color="#E63946" />
            </Pressable>
          </View>
        ))}
        {/* Linha 2 - Destino final */}
        <View className="h-10 flex flex-row items-center space-x-2 hover:bg-slate-200 border-b border-slate-400 justify-between">
          <View className="w-5">
            <Fontisto
              name="map-marker-alt"
              size={20}
              color="#5390D9"
              className="flex justify-center"
            />
          </View>
          <TextInput
            placeholder="Destino (Rua e número)"
            className="w-full text-sm text-gray-700 p-2"
            placeholderTextColor="#999"
          />
        </View>
        {/* Linha 3 - Botão adicionar */}
        <Pressable
          onPress={handleAddDestino}
          className="h-10 flex flex-row items-center justify-center space-x-2 hover:bg-slate-200 rounded-b-md"
        >
          <FontAwesome name="plus" size={16} color="#5E60CE" />
          <Text className="text-base font-medium text-[#5E60CE]">
            Adicionar ponto de entrega
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
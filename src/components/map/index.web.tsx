import { View } from "react-native";

export function Map() {
  return (
    <View className="w-full grow-0 xl:grow min-w-fit bg-white rounded-xl overflow-hidden shadow-md p-0.5">
      <iframe
        title="Mapa"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 12 }}
        loading="lazy"
        allowFullScreen
        src="https://www.openstreetmap.org/export/embed.html?bbox=-46.65%2C-23.57%2C-46.62%2C-23.55&layer=mapnik"
      />
    </View>
  );
}
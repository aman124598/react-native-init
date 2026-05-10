import { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

// Create an array of 20 item objects
const ITEMS = Array.from({ length: 20 }, (_, index) => ({
  id: index.toString(),
  name: `Item Number ${index + 1}`
}));

// Create another array for the FlatList demo
const FLATLIST_ITEMS = Array.from({ length: 10 }, (_, index) => ({
  id: index.toString(),
  title: `Card ${index + 1}`
}));

export default function HomePage() {
  const [buttonText, setButtonText] = useState('Press Me');

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 50, backgroundColor: 'white' }}>

      {/* Text Component */}
      <Text>Hello World!!</Text>

      {/* image component */}
      <Image
        source={require('@/assets/images/icon.png')}
        style={{ width: 100, height: 100, marginTop: 20 }}
      />

      {/* text area component */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, width: '80%', paddingHorizontal: 10 }}
        placeholder="Type here"
      />

      {/* pressable text component */}
      <Pressable
        onPress={() => setButtonText('Pressed')}
        style={{ marginTop: 20, marginBottom: 30, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>{buttonText}</Text>
      </Pressable>

      {/* FlatList Demo (Horizontal) */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Horizontal FlatList Demo</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={FLATLIST_ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: '#e0f7fa', padding: 20, marginRight: 10, borderRadius: 10, borderWidth: 1, borderColor: '#00bcd4' }}>
            <Text style={{ fontWeight: 'bold', color: '#006064' }}>{item.title}</Text>
          </View>
        )}
        style={{ width: '100%', paddingLeft: 20, marginBottom: 30 }}
      />

      {/* Mapping over our 20 items here */}
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, backgroundColor: '#f70000' }}>My Scrollable List</Text>
      {ITEMS.map((item) => (
        <View key={item.id} style={{ padding: 15, borderBottomWidth: 1, borderColor: '#eee', width: '30%', backgroundColor: '#f8d7d7', borderRadius: 5, marginBottom: 10 }}>
          <Text style={{ textAlign: 'center', fontSize: 16 }}>{item.name}</Text>
        </View>
      ))}

    </ScrollView>
  );
}
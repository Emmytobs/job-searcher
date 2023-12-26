import { useCallback } from 'react';
import { Stack } from 'expo-router'
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"

// Show the splashscreen upon app launch
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            // Hide the splashscreen only when the fonts have been loaded.
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    // Don't show the page until the font is loaded
    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;
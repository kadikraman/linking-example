import { Link, usePathname } from "expo-router";
import { View, Text } from "react-native";

const pages = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
];

export function HeaderNav() {
  const pathName = usePathname();

  return (
    <View className="mr-6 flex-row gap-4 sm:inline-flex hidden">
      {pages.map((page) => {
        if (pathName === page.href) {
          return (
            <Text
              className="font-bold underline text-lg tracking-wider"
              key={page.name}
            >
              {page.name}
            </Text>
          );
        } else {
          return (
            <Link href={page.href} key={page.name}>
              <Text className="text-lg tracking-wider font-bold text-gray-500">
                {page.name}
              </Text>
            </Link>
          );
        }
      })}
    </View>
  );
}

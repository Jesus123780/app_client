import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { IconHome, IconLogo, IconProfile, IconProps, IconSearch, IconSettings, IconShopping } from '../../assets/icons'

interface IconMap {
  [key: string]: FC<IconProps>
}

interface IconPropsComponent extends IconProps {
  icon: string
}

const Icons: IconMap = {
  home: IconHome,
  search: IconSearch,
  profile: IconProfile,
  settings: IconSettings,
  logo: IconLogo,
  shopping: IconShopping,
}

const GetIcon = (key: string): FC<IconProps> | null => {
  const Icono = Icons[key]
  return Icono || null
}

export const Icon: FC<IconPropsComponent> = ({ icon, size, width, height, color }) => {
  const Icono = GetIcon(icon)
  if (!Icono) {
    return (
      <View>
        <Text>No se encontró el ícono</Text>
      </View>
    )
  }
  return <Icono size={size || 20} color={color} width={width} height={height} />
}

import { Item } from "~/types/Shoplist";

interface ButtonProps {
  name?: string;
  customStyle?: string;
}

interface NavButtonProps extends ButtonProps {
  icon: string;
  route?: string;
}

interface IconButtonProps extends ButtonProps {
  icon?: string;
  route?: string;
}

interface InputLabel {
  htmlFor: string;
  labelName: string;
}

interface InputProps {
  name: string;
  type: string;
  customStyle?: string;
  placeholder?: string;

  modelValue: string | number;
}

interface IconInputProps extends InputProps {
  icon?: string;
}

interface ItemCardProps {
  id: number;
  title: string;
  price: number;
  image: string;

  icon: string;
}

interface HeadingProps {
  title: string;
  icon?: string;
  subtitle: string;

  iconStyle: string;
}

interface ListCardProps {
  title: string;
  total: string;
  isMoney?: boolean;
}

interface UnderlinedButtonProps {
  name: string;
}

interface ShoplistsProps {
  shoplists: NavButtonProps[];
}

export {
  NavButtonProps,
  ItemCardProps,
  ButtonProps,
  IconButtonProps,
  IconInputProps,
  InputProps,
  HeadingProps,
  InputLabel,
  ListCardProps,
  UnderlinedButtonProps,
  ShoplistsProps,
};

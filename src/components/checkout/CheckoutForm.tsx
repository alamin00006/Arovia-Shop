import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import { checkoutSchema, CheckoutPayload } from '@/schemas/checkout.schema';
import { AppInput } from '@/components/common/AppInput';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { AppButton } from '@/components/common/AppButton';

export const CheckoutForm = ({ onSubmit }: { onSubmit: (v: CheckoutPayload) => void }) => {
  const { control, handleSubmit } = useForm<CheckoutPayload>({ resolver: zodResolver(checkoutSchema), defaultValues: { paymentMethod: 'COD' } as any });
  return <View style={{ gap: 8 }}><Controller control={control} name='name' render={({ field }) => <AppInput placeholder='Name' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='phone' render={({ field }) => <AppInput placeholder='Phone' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='address' render={({ field }) => <AppInput placeholder='Address' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='city' render={({ field }) => <AppInput placeholder='City' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='deliveryArea' render={({ field }) => <AppInput placeholder='Delivery Area' value={field.value} onChangeText={field.onChange} />} /><Controller control={control} name='paymentMethod' render={({ field }) => <PaymentMethodSelector value={field.value as any} onChange={field.onChange as any} />} /><AppButton title='Place Order' onPress={handleSubmit(onSubmit)} /></View>;
};

import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { AppButton } from '@/components/common/AppButton';

export const FilterBottomSheet = ({ sheetRef }: { sheetRef: any }) => {
  const snapPoints = useMemo(() => ['25%', '60%'], []);
  return <BottomSheet ref={sheetRef} index={-1} snapPoints={snapPoints}><View style={{ padding: 16, gap: 8 }}><Text style={{ fontWeight: '700' }}>Filters</Text><Text>Category, brand, price, badge filter placeholders</Text><AppButton title='Apply Filters' /></View></BottomSheet>;
};

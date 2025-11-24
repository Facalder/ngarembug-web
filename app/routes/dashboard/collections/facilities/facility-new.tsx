import PageHeader from '@/components/page-header';
import FacilityForm from '@/features/dashboard/components/facilityForm';

export default function FacilityNewPage() {
	return (
		<>
			<PageHeader title="Buat fasilitas baru" />
			<FacilityForm />
		</>
	);
}

import PageHeader from '@/components/page-header';
import CategoryForm from '@/features/dashboard/components/categoryForm';

export default function CategoryNewPage() {
	return (
		<>
			<PageHeader title="Buat kategori baru" />
			<CategoryForm />
		</>
	);
}

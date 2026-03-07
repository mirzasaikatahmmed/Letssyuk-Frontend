interface PageHeadingProps {
  title: string;
  subTitle: string;
}

const PageHeading = ({ title, subTitle }: PageHeadingProps) => {
  return (
    <div className="mb-4 space-y-2">
      <h1 className="text-white text-3xl font-bold">{title}</h1>
      <p className="text-gray-400 text-sm">{subTitle}</p>
    </div>
  );
};

export default PageHeading;

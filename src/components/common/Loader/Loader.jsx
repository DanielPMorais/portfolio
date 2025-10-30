export function Loader() {
  return (
    <div className="app-loader-backdrop" aria-busy="true" aria-live="polite">
      <div className="app-loader-spinner" />
    </div>
  );
}

import ContentLoader from 'react-content-loader';
import s from './Skeleton.module.scss'

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="124" r="117" /> 
    <rect x="2" y="262" rx="13" ry="13" width="261" height="28" /> 
    <rect x="-1" y="310" rx="12" ry="12" width="280" height="88" /> 
    <rect x="3" y="427" rx="10" ry="10" width="90" height="27" /> 
    <rect x="135" y="414" rx="29" ry="29" width="144" height="44" />
  </ContentLoader>
)

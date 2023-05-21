import { BugetPC, GamingPC, DevelopmentPC } from './config';
import { PCConfigurationBuilder } from './pc-builder';

console.log(new PCConfigurationBuilder<BugetPC>(BugetPC).build());
console.log(new PCConfigurationBuilder<GamingPC>(GamingPC).build());
console.log(new PCConfigurationBuilder<DevelopmentPC>(DevelopmentPC).build());

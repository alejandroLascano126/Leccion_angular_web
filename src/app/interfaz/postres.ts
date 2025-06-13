export interface Postres {
  nombre: string;
  pasos: string[];
  imagen: string;
}



export function mapApiToReceta(apiData: any): Postres {
  return {
    nombre: apiData.strMeal,
    pasos: apiData.strInstructions,
    imagen: apiData.strMealThumb
  };
}
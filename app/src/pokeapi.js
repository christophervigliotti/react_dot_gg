export async function fetchPokemon (id) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    )

    if (res.ok === true) {
      return {
        error: null,
        response: await res.json()
      }
    }

    throw new Error(`Error fetching pokemon #${id}`)
  } catch (e) {
    return {
      error: e,
      response: null
    }
  }
}

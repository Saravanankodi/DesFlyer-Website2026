// Minimal external store factory, designed for React 19's useSyncExternalStore.
// This is what makes Admin <-> public site sync genuinely work within a session —
// both read from the same in-memory state and re-render on change. No backend
// needed for this part; it's real, not mocked. Resets on page reload (no DB yet).

export function createStore(initialState) {
  let state = initialState
  const listeners = new Set()

  function getState() {
    return state
  }

  function setState(updater) {
    state = typeof updater === 'function' ? updater(state) : updater
    listeners.forEach((l) => l())
  }

  function subscribe(listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

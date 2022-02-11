import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function getBirds() {
  const response = await client 
    .from('birds')
    .select();

  return checkError(response);
}

export async function getBird(id) {
  const response = await client
    .from('birds')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}

export async function createBird(bird) {
  const response = await client
    .from('birds')
    .insert([bird]);

  return checkError(response);
}

export async function deleteBird(id) {
  const response = await client
    .from('birds')
    .delete()
    .match({ id });

  return checkError(response);
}
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = [
    pkgs.mdbook
    pkgs.mdbook-admonish
  ];
}

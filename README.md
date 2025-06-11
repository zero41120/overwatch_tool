# Overwatch Tool

This tool calculates optimal item builds. A new `overrides.json` file under `my-app/src` allows customizing item attributes. The JSON maps item names to replacement attribute arrays. Any matching item will use the provided attributes during calculation.

## Minimum Attribute Values

The input form now includes a *Minimum Attribute Totals* section. When enabled, you can define one or more groups of attributes along with a required minimum sum. The optimizer will only consider item combinations that meet each group's threshold when combined with currently equipped items.
